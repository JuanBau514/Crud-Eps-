import Connection from "../bd/connection.js";

class CitasDAO {
  constructor() {}
  create = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const {
      id_cita,
      fecha_hora,
      id_paciente,
      id_medico,
      id_sede,
      id_modalidad,
      asistencia,
    } = values;
    console.log(values);
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "INSERT INTO cita(fecha_hora,id_paciente,id_medico,id_sede,id_modalidad,asistencia) VALUES (?,?,?,?,?,?)",
        [fecha_hora, id_paciente, id_medico, id_sede, id_modalidad, asistencia]
      );
      console.log(`resultscreate:`, results); // Resultados de la consulta
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  read = async () => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM cita" // Cambiado a tabla de usuarios
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };
  update = async (updatedValues) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const {
      id_cita,
      fecha_hora,
      id_paciente,
      id_medico,
      id_sede,
      id_modalidad,
      asistencia,
    } = updatedValues;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE cita SET fecha_hora=?, id_paciente=?, id_medico=?, id_sede=?, id_modalidad=?, asistencia=? WHERE id_cita=?",
        [
          fecha_hora,
          id_paciente,
          id_medico,
          id_sede,
          id_modalidad,
          asistencia,
          id_cita,
        ]
      );
      console.log(`resultsupdate:`, results);
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  delete = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const { id_cita } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "DELETE FROM cita WHERE id_cita=?",
        [id_cita]
      );
      console.log(`resultscreate:`, results); // Resultados de la consulta
      return results;
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  datesForPatient = async (id_usuario) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        'SELECT m.nombre as "Doctor", es.nombre as "Especialidad",c.fecha_hora as "Hora y fecha",s.nombre as "SEDE", mo.tipo as "Modalidad" FROM cita c INNER JOIN paciente p ON (c.id_paciente=p.id_paciente) INNER JOIN usuarios u ON(u.id_usuario=p.id_usuario) INNER JOIN medico m ON (c.id_medico=m.id_medico)INNER JOIN especialidad es ON(m.especialidad=es.id) INNER JOIN sede s ON (c.id_sede=s.id_sede) INNER JOIN modalidad_consulta mo ON (c.id_modalidad=mo.id_modalidad)WHERE u.id_usuario=? AND c.fecha_hora<NOW();',
        [id_usuario]
      );
      return results;
      //console.log(results); // Resultados de la consulta
      //console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  restDatesForPatient = async (id_usuario) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        'SELECT m.nombre as "Doctor", es.nombre as "Especialidad",c.fecha_hora as "Hora y fecha",s.nombre as "SEDE", mo.tipo as "Modalidad" FROM cita c INNER JOIN paciente p ON (c.id_paciente=p.id_paciente) INNER JOIN usuarios u ON(u.id_usuario=p.id_usuario) INNER JOIN medico m ON (c.id_medico=m.id_medico)INNER JOIN especialidad es ON(m.especialidad=es.id) INNER JOIN sede s ON (c.id_sede=s.id_sede) INNER JOIN modalidad_consulta mo ON (c.id_modalidad=mo.id_modalidad)WHERE u.id_usuario=? AND c.fecha_hora>NOW();',
        [id_usuario]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
      return results[0];
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  datesForMedic = async (id_usuario) => {
    let instanciaObjetoConexion = Connection.getInstance();

    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        'SELECT  p.nombres as "NombrePaciente",p.apellidos as "Apellido", es.nombre as "Especialidad",c.fecha_hora as "Hora y fecha",s.nombre as "SEDE", mo.tipo as "Modalidad", c.asistencia FROM cita c INNER JOIN paciente p ON (c.id_paciente=p.id_paciente) INNER JOIN medico m ON (c.id_medico=m.id_medico) INNER JOIN usuarios u ON (m.id_usuario=u.id_usuario)INNER JOIN especialidad es ON(m.especialidad=es.id) INNER JOIN sede s ON (c.id_sede=s.id_sede) INNER JOIN modalidad_consulta mo ON (c.id_modalidad=mo.id_modalidad)WHERE u.id_usuario=?;',
        [id_usuario]
      );
      return results[0];
      //console.log(results); // Resultados de la consulta
      //console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };
  restDatesForMedic = async (id_usuario) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        'SELECT  p.nombres as "NombrePaciente",p.apellidos as "Apellido", es.nombre as "Especialidad",c.fecha_hora as "Hora y fecha",s.nombre as "SEDE", mo.tipo as "Modalidad", c.asistencia FROM cita c INNER JOIN paciente p ON (c.id_paciente=p.id_paciente) INNER JOIN medico m ON (c.id_medico=m.id_medico) INNER JOIN usuarios u ON (m.id_usuario=u.id_usuario)INNER JOIN especialidad es ON(m.especialidad=es.id) INNER JOIN sede s ON (c.id_sede=s.id_sede) INNER JOIN modalidad_consulta mo ON (c.id_modalidad=mo.id_modalidad)WHERE u.id_usuario=? AND c.asistencia=0;',
        [id_usuario]
      );
      return results[0];
      //console.log(results); // Resultados de la consulta
      //console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };
}

export default CitasDAO;
