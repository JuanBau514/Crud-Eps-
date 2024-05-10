import Connection from "../bd/connection.js";

class UserDAO {
  // Cambiar por tabla de usuarios
  constructor() {}

  create = async (values) => {
    const { correo_usuario, password, estado, token } = values; // Cambiado a propiedades de usuario
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const insertValues = [correo_usuario, password, estado, token];
      const [results, fields] = await instanciaObjetoConexion.query(
        "INSERT INTO usuarios (correo_usuario, password, estado, token) VALUES (?, ?, ?, ?)",
        insertValues
      );
      console.log(`resultscreate:`,results); // Resultados de la consulta
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
        "SELECT * FROM usuarios" // Cambiado a tabla de usuarios
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
    try {
      const { id_usuario, correo_usuario, password, estado, token } = values; // Cambiado a propiedades de usuario
      const updateValues = [
        correo_usuario,
        password,
        estado,
        token,
        id_usuario,
      ];
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE usuarios SET correo_usuario=?, password=?, estado=?, token=? WHERE id_usuario = ?",
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
    try {
      let { id_usuario } = values;
      const [results, fields] = await instanciaObjetoConexion.query(
        "DELETE FROM usuarios WHERE id_usuario=?",
        [id_usuario]
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
    try {
      let { id_usuario } = values;
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM usuarios WHERE id_usuario=?",
        [id_usuario]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  };

  searchByEmailAndPassword = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const { correo_usuario, password } = values;
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM usuarios WHERE correo_usuario=? AND password=?",
        [correo_usuario, password]
      );
      //console.log(results); // Resultados de la consulta
      //console.log(fields); // Metadatos adicionales de los resultados
      if (results.length > 0) {
        return results[0]; // Retorna el primer objeto usuario si la consulta fue exitosa y encontró al menos un usuario
      } else {
        return null; // Retorna null si no se encontró ningún usuario
      }
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.close();
    }
  }

}
//const dao = new UserDAO();


export default UserDAO;
