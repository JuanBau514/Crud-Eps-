import Connection from "../bd/connection.js";

class AdminDAO {
  // Cambiar por tabla de usuarios
  constructor() {}

  create = async (values) => {
    const { nombre, id_usuario } = values; // Cambiado a propiedades de usuario
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const insertValues = [nombre, id_usuario];
      const [results, fields] = await instanciaObjetoConexion.query(
        "INSERT INTO admin (nombre, id_usuario) VALUES (?, ?)",
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
        "SELECT * FROM admin" // Cambiado a tabla de usuarios
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
    const { id_admin, nombre, id_usuario } = values; // Cambiado a propiedades de usuario
    let instanciaObjetoConexion = Connection.getInstance();
    try {
      const updateValues = [nombre, id_admin];
      const [results, fields] = await instanciaObjetoConexion.query(
        "UPDATE admin SET nombre=? WHERE id_admin = ?",
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
    const { id_admin } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "DELETE FROM admin WHERE id_admin=?",
        [id_admin]
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
    const { id_admin } = values;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        "SELECT * FROM admin WHERE id_admin=?",
        [id_admin]
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

//const admin = { id_admin: 12004, nombre: "SocorroAyuda", id_usuario: 13009 };

//const adminDAO = new AdminDAO();

//adminDAO.read();
//adminDAO.create(admin);
//adminDAO.searchById(admin);
//adminDAO.update(admin);
//adminDAO.delete(admin);
export default AdminDAO;