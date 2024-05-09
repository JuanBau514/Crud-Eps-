import Connection from "../bd/connection.js";

class UserDAO {
  // Cambiar por tabla de usuarios
  constructor() {}

  create = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const { id_usuario, correo_usuario, password, estado, token } = values; // Cambiado a propiedades de usuario
      let insertValues = [id_usuario, correo_usuario, password, estado, token];
      console.log(id_usuario, correo_usuario, password, estado, token);
      const [results, fields] = await instanciaObjetoConexion.query(
        "INSERT INTO usuarios (id_usuario, correo_usuario, password, estado, token) VALUES (?, ?, ?, ?, ?)",
        insertValues
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.end();
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
      instanciaObjetoConexion.end();
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
      instanciaObjetoConexion.end();
    }
  };

  delete = async (id_usuario) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "DELETE FROM usuarios WHERE id_usuario=?",
        [id_usuario]
      );
      console.log(results); // Resultados de la consulta
      console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
    } finally {
      instanciaObjetoConexion.end();
    }
  };
}
//let dao = new UserDAO(); Para testing

export default UserDAO;
