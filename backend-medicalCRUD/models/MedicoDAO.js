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
      //console.log(results); // Resultados de la consulta
      //console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
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
      //instanciaObjetoConexion.close();
    }
  };

  searchByIdUser =  async (id_usuario) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM medico WHERE id_usuario=?",
        [id_usuario]
      );
      if (results.length > 0) {
        return results[0]; // Retorna el primer objeto usuario si la consulta fue exitosa y encontró al menos un usuario
      } else {
        return null; // Retorna null si no se encontró ningún usuario
      }
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  searchById = async (id_medico) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM medico WHERE id_medico=?",
        [id_medico]
      );
      if (results.length > 0) {
        return results[0]; // Retorna el primer objeto usuario si la consulta fue exitosa y encontró al menos un usuario
      } else {
        return null; // Retorna null si no se encontró ningún usuario
      }
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  searchCites = async (id_medico) => {    
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `SELECT DISTINCT
        c.id_cita as "Orden de cita", 
        m.nombre as "Doctor", 
        p.nombres as "Paciente", 
        es.nombre as "Especialidad", 
        c.fecha_hora as "Hora y fecha", 
        c.asistencia as "Asistencia", 
        s.nombre as "Sede", 
        mo.tipo as "Modalidad",
        e.nombre AS "Nombre del examen", 
        ex.tipo AS "Tipo de examen", 
        ex.resultado AS "Resultado", 
        d.descripcion as "Diagnostico", 
        d.fecha as "Fecha de diagnostico"
        FROM cita c
        LEFT JOIN paciente p ON c.id_paciente = p.id_paciente
        LEFT JOIN medico m ON c.id_medico = m.id_medico
        LEFT JOIN especialidad es ON m.especialidad = es.id
        LEFT JOIN sede s ON c.id_sede = s.id_sede
        LEFT JOIN modalidad_consulta mo ON c.id_modalidad = mo.id_modalidad
        LEFT JOIN examen_cita ex ON c.id_cita = ex.id_cita
        LEFT JOIN examen e ON ex.id_examen = e.id
        LEFT JOIN diagnostico d ON c.id_cita = d.id_cita
        WHERE c.id_medico=?
        ORDER BY c.fecha_hora DESC`,
        [id_medico]
      );
      if (results.length > 0) {
        return results; // Retorna el primer objeto usuario si la consulta fue exitosa y encontró al menos un usuario
      } else {
        return null; // Retorna null si no se encontró ningún usuario
      }
    }catch(error){
      console.log(error);
    }
  }

  obtainDiagnostic = async () => {
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `
          SELECT * FROM diagnostico;
        `
      );
      if (results.length > 0) {
        return results;
      } else {
        return null;
      }
    }catch(error){
      console.log(error);
    }
  }

  updateExam = async (idCita, nombreExamen, tipoExamen, resultadoExamen) => {
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `
          UPDATE examen_cita
          SET tipo = ?, resultado = ?, id_examen=?
          WHERE id_cita = ?;
        `,
        [tipoExamen, resultadoExamen, nombreExamen, idCita]
      );
      if (results.length > 0) {
        return results;
      } else {
        return null;
      }
    }catch(error){
      console.log(error);
    }
  }

  insertarExamen = async (idCita, nombreExamen, tipoExamen, resultadoExamen) => {
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `
        INSERT INTO examen_cita (id_examen, id_cita, tipo, resultado) VALUES
        (?, ?, ?, ?)
        `,
        [nombreExamen, idCita, tipoExamen, resultadoExamen]
      );
      if (results.length > 0) {
        return results;
      } else {
        return null;
      }
    }catch(error){
      console.log(error);
    }    
  }

  updateDiagnostic = async (idCita, descripcion, fechaDiagnostico) => {
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `
          UPDATE diagnostico 
          SET descripcion = ?, fecha = ?
          WHERE id_cita = ?;
        `,
        [descripcion, fechaDiagnostico, idCita]
      );
      if (results.length > 0) {
        return results;
      } else {
        return null;
      }
    }catch(error){
      console.log(error);
    }
  }

  insertarDiagnostico = async (id_cita, descripcion, fecha) => {
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `
          INSERT INTO diagnostico (id_cita, descripcion, fecha) VALUES
          (?, ?, ?)
          
        `,
        [id_cita, descripcion, fecha]
      );
      if (results.length > 0) {
        return results; // Retorna el primer objeto usuario si la consulta fue exitosa y encontró al menos un usuario
      } else {
        return null; // Retorna null si no se encontró ningún usuario
      }
    }catch(error){
      console.log(error);
    }
  }
  
  updateAssist = async (id_cita, asistencia) => {
    const instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        `
          UPDATE cita
          SET asistencia = ?
          WHERE id_cita = ?
        `,
        [asistencia, id_cita]
      );
    }catch(error){
      console.log(error);
    }
  }
  close = async () => {
    try {
        const instanciaObjetoConexion = Connection.getInstance();
        if (instanciaObjetoConexion) {
            await instanciaObjetoConexion.close();
        } else {
            console.log("No se encontró una instancia de conexión activa para cerrar.");
        }
    } catch (error) {
        console.error("Error al cerrar la conexión:", error);
        throw new Error ('Error al cerrar la conexión');
    }
  }

}
export default MedicoDAO;
/*
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
