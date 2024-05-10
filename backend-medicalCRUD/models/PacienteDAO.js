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
      instanciaObjetoConexion.close();
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
      instanciaObjetoConexion.close();
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
      instanciaObjetoConexion.close();
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
      instanciaObjetoConexion.close();
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
      instanciaObjetoConexion.close();
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
