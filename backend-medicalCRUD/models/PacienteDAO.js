import Connection from "../bd/connection.js";

class PacienteDAO {
  // Cambiar por tabla de usuarios
  constructor() {}

  create = async (values) => {
    const {
      nombres,
      apellidos,
      fecha_naci,
      lugar_naci,
      direccion_re,
      direccion_cor,
      estrato,
      ciudad_resi,
      ciudad_afili,
      id_usuario,
    } = values; // Cambiado a propiedades de usuario
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const insertValues = [
        nombres,
        apellidos,
        fecha_naci,
        lugar_naci,
        direccion_re,
        direccion_cor,
        estrato,
        ciudad_resi,
        ciudad_afili,
        id_usuario,
      ];
      const [results, fields] = await instanciaObjetoConexion.query(
        "INSERT INTO paciente (nombres, apellidos, fecha_naci, lugar_naci, direccion_re, direccion_cor, estrato,ciudad_resi, ciudad_afili, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        insertValues
      );
      console.log(`resultscreate:`, results); // Resultados de la consulta
      return results;
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  read = async () => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      console.log(instanciaObjetoConexion);
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM paciente" // Cambiado a tabla de usuarios
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  update = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const {
      id_paciente,
      nombres,
      apellidos,
      fecha_naci,
      lugar_naci,
      direccion_re,
      direccion_cor,
      estrato,
      ciudad_resi,
      ciudad_afili,
    } = values; // Cambiado a propiedades de usuario
    const updateValues = [
      nombres,
      apellidos,
      fecha_naci,
      lugar_naci,
      direccion_re,
      direccion_cor,
      estrato,
      ciudad_resi,
      ciudad_afili,
      id_paciente,
    ];
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE paciente SET nombres=?, apellidos=?, fecha_naci=?, lugar_naci=?, direccion_re=?, direccion_cor=?, estrato=?,ciudad_resi=?, ciudad_afili=? WHERE id_paciente = ?",
        updateValues
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  delete = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    let { id_paciente } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "DELETE FROM paciente WHERE id_paciente=?",
        [id_paciente]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };
  searchById = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    let { id_paciente } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM paciente WHERE id_paciente=?",
        [id_paciente]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };
  getPatienID = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT p.id_paciente FROM paciente p INNER JOIN usuarios u ON(p.id_usuario=u.id_usuario) WHERE u.id_usuario=?",
        [values]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
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
  dataPacienteByUserId = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT p.id_usuario,p.nombres,p.apellidos,u.correo_usuario,p.direccion_re, tp.telefonos FROM paciente p INNER JOIN telefono_paciente tp ON(tp.id_paciente=p.id_paciente) INNER JOIN usuarios u ON (p.id_usuario=u.id_usuario) WHERE p.id_usuario=?",
        [values]
      );
      console.log(results[0]); // Resultados de la consulta
      if (results.length > 0) {
        return results[0]; // Retorna el primer objeto usuario si la consulta fue exitosa y encontró al menos un usuario
      } else {
        return null; // Retorna null si no se encontró ningún usuario
      } // Result
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };
  updatedManualValues = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    let { nombres, apellidos, direccion_re, id_paciente } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE paciente SET nombres=?, apellidos=?, direccion_re=? WHERE id_paciente=?",
        [nombres, apellidos, direccion_re, id_paciente]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
    }
  };
  updateTelefono = async (updatedValues) => {
    let instanciaObjetoConexion = Connection.getInstance();
    let { telefono, id_paciente } = updatedValues;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE telefono_paciente SET telefonos=? WHERE id_paciente=?",
        [telefono, id_paciente]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      //instanciaObjetoConexion.close();
    }
  };

  close = async () => {
    try {
      const instanciaObjetoConexion = Connection.getInstance();
      if (instanciaObjetoConexion) {
        await instanciaObjetoConexion.close();
      } else {
        console.log(
          "No se encontró una instancia de conexión activa para cerrar."
        );
      }
    } catch (error) {
      console.error("Error al cerrar la conexión:", error);
      throw new Error("Error al cerrar la conexión");
    }
  };
}

export default PacienteDAO;

//const dao = new UserDAO();
//pruebas.php
/* const daoPaciente = new PacienteDAO();

//daoPaciente.read();

const pacientePrueba = {
  id_paciente: 1005,
  nombres: "Atún",
  apellidos: "Limón",
  fecha_naci: "2007-05-20",
  lugar_naci: 1,
  direccion_re: "Avenida desespero",
  direccion_cor: "atoutlemonda@email.com",
  estrato: 1,
  ciudad_resi: 1,
  ciudad_afili: 1,
  id_usuario: 13001,
};
 */
//daoPaciente.create(pacientePrueba);

//daoPaciente.update(pacientePrueba);

//daoPaciente.delete(pacientePrueba);

//daoPaciente.searchById(pacientePrueba);
