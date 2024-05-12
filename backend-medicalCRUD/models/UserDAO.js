import Connection from "../bd/connection.js";
import User from "../models/User.js";
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
      console.log(`resultscreate:`, results); // Resultados de la consulta
      return results;
    } catch (error) {
      console.log(error); // Manejo de errores
      throw new Error ('No se ha hecho la consulta create');
    } finally {
      //await instanciaObjetoConexion.close();
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
      throw new Error ('No se ha hecho la consulta read');
    } finally {
      //await instanciaObjetoConexion.close();
    }
  };

  update = async (values) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const { id_usuario, correo_usuario, password, estado, token } = values; // Cambiado a propiedades de usuario
    const updateValues = [
      correo_usuario,
      password,
      estado,
      token,
      id_usuario,
    ];
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE usuarios SET correo_usuario=?, password=?, estado=?, token=? WHERE id_usuario = ?",
        updateValues
      );
      console.log(results); // Resultados de la consulta
      //console.log(fields); // Metadatos adicionales de los resultados
    } catch (error) {
      console.log(error); // Manejo de errores
      throw new Error ('No se ha hecho la consulta update');
    } finally {
      //await instanciaObjetoConexion.close();
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
      throw new Error ('No se ha hecho la consulta delete');
    } finally {
      //await instanciaObjetoConexion.close();
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
      throw new Error ('No se ha hecho la consulta searchById');
    } finally {
      //await instanciaObjetoConexion.close();
    }
  };
  searchByEmail = async (email) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const correo_usuario = email;
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM usuarios WHERE correo_usuario=?",
        [correo_usuario]
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
      throw new Error ('No se ha hecho la consulta searchByEmail');
    } finally {
      //await instanciaObjetoConexion.close();
    }    
  }
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
      throw new Error ('No se ha hecho la consulta searchByEmailAndPassword');
    } finally {
      //await instanciaObjetoConexion.close();
    }
  };

  searchByTypeUser = async (email) => {
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const correo_usuario = email;
      const [results, fields] = await instanciaObjetoConexion.query(
        `
        SELECT '0' AS tipo_usuario FROM paciente p
        INNER JOIN usuarios u ON p.id_usuario = u.id_usuario
        WHERE u.correo_usuario = ? AND u.estado = 1
        UNION
        SELECT '1' AS tipo_usuario FROM medico m
        INNER JOIN usuarios u ON m.id_usuario = u.id_usuario
        WHERE u.correo_usuario = ? AND u.estado = 1
        UNION
        SELECT '2' AS tipo_usuario FROM admin a
        INNER JOIN usuarios u ON a.id_usuario = u.id_usuario
        WHERE u.correo_usuario = ? AND u.estado = 1;
        `,
        [correo_usuario, correo_usuario, correo_usuario]
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
      throw new Error ('No se ha hecho la consulta searchByTypeUser');
    } 
  }

  close = async () => {
    let instanciaObjetoConexion = Connection.getInstance();
    await instanciaObjetoConexion.close();
  }
  
}

export default UserDAO;