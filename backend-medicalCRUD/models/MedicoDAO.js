import Connection from "../bd/connection.js";

class MedicoDAO {
  // Cambiar por tabla de usuarios
  constructor() {}

  create = async (values) => {
    const {
      id_medico,
      nombre,
      direccion,
      ciudad,
      licencia_medica,
      especialidad,
      tipo_licencia,
      id_usuario,
    } = values; // Cambiado a propiedades de usuario
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const insertValues = [
        nombre,
        direccion,
        ciudad,
        licencia_medica,
        especialidad,
        tipo_licencia,
        id_usuario,
      ];
      const [results, fields] = await instanciaObjetoConexion.query(
        "INSERT INTO medico (nombre, direccion, ciudad, licencia_medica, especialidad, tipo_licencia,id_usuario) VALUES(?, ?, ?, ?, ?, ?, ?)",
        insertValues
      );
      console.log(`resultscreate:`, results); // Resultados de la consulta
      return results;
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  };

  read = async () => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      console.log(instanciaObjetoConexion);
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM medico" // Cambiado a tabla de usuarios
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  };

  update = async (values) => {
    const {
      id_medico,
      nombre,
      direccion,
      ciudad,
      licencia_medica,
      especialidad,
      tipo_licencia,
    } = values; // Cambiado a propiedades de usuario
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const updateValues = [
        nombre,
        direccion,
        ciudad,
        licencia_medica,
        especialidad,
        tipo_licencia,
        id_medico,
      ];
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE medico SET nombre=?, direccion=?, ciudad=?, licencia_medica=?, especialidad=?, tipo_licencia=? WHERE id_medico = ?",
        updateValues
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  };

  delete = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    let { id_medico } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "DELETE FROM medico WHERE id_medico=?",
        [id_medico]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  };
  searchById = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    let { id_medico } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM medico WHERE id_medico=?",
        [id_medico]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  };
  datesForMedic = async (user) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const { id_usuario } = user;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        'SELECT  p.nombres as "NombrePaciente",p.apellidos as "Apellido", es.nombre as "Especialidad",c.fecha_hora as "Hora y fecha",s.nombre as "SEDE", mo.tipo as "Modalidad", c.asistencia FROM cita c INNER JOIN paciente p ON (c.id_paciente=p.id_paciente) INNER JOIN medico m ON (c.id_medico=m.id_medico) INNER JOIN usuarios u ON (m.id_usuario=u.id_usuario)INNER JOIN especialidad es ON(m.especialidad=es.id) INNER JOIN sede s ON (c.id_sede=s.id_sede) INNER JOIN modalidad_consulta mo ON (c.id_modalidad=mo.id_modalidad)WHERE u.id_usuario=?;',
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
}
/* export default MedicoDAO;
const medicoDAO = new MedicoDAO();
const medico = {
  id_medico: 4004,
  nombre: "Dr. Hermenegildo Gutierrez",
  direccion: "Calle Principal 123",
  ciudad: 2,
  licencia_medica: "12345",
  especialidad: 2001,
  tipo_licencia: 3001,
  id_usuario: 13004,
};
medicoDAO.datesForMedic(medico); */
//medicoDAO.create(medico);
//medicoDAO.read();
//medicoDAO.update(medico);
//medicoDAO.searchById(medico)
//medicoDAO.delete(medico);
/* FALTARIA UPDATE */
