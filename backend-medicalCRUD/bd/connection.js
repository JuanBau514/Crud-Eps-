// Get the client
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar dotenv con la ruta absoluta al archivo .env
dotenv.config({ path: path.resolve(__dirname, ".env") });
const dbHost = process.env.HOST;
const dbUser = process.env.USER;
const db = process.env.DATABASE;
const dbPassword = process.env.PASSWORD;
const dbPort = process.env.PORT;
console.log(db, dbPassword, dbPort);
// Create the connection to database
export default class Connection {
  static #instance = null;
  #connection = null;

  constructor() {
      this.initializeConnection(); // Cambio de lógica
  }

  static getInstance() {
    if (!Connection.#instance) {
        Connection.#instance = new Connection();
    } else if (!Connection.#instance.connection) {
        console.log("Reinicializando la conexión.");
        Connection.#instance.initializeConnection();
    }
    return Connection.#instance;
  }

  initializeConnection() {
    // Crear la conexión a la base de datos
    this.#connection = mysql.createPool({
      host: dbHost,
      user: dbUser,
      database: db,
      password: dbPassword,
      port: dbPort,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  async query(sql, values = []) {
    try {
      const [results, fields] = await this.#connection.execute(sql, values);
      console.log(results, fields);
      return [results, fields];
    } catch (error) {
      throw new Error(`Error executing query: ${error.message}`);
    }
  }
  /*async queryWithPlaceholders(sql, placeholders = {}) {
    const formattedSql = sql.replace(/\?/g, (match) => {
      if (placeholders[match] !== undefined) {
        return this.#connection.escape(placeholders[match]);
      }
      return match;
    });
    return this.query(formattedSql);
  }*/
  async close() {
    if (this.#connection) {
      await this.#connection.end();
      this.#connection = null;
    }
  }
}
// Ejemplo de uso del Singleton Database con placeholders
/* (async () => {
  const dbInstance = Database.getInstance();
  try {
    const id = 1;
    const [results, fields] = await dbInstance.queryWithPlaceholders(
      "SELECT * FROM admin WHERE id_admin = ?",
      { "?": id }
    );
    console.log(results); // Resultados de la consulta
    console.log(fields); // Metadatos adicionales de los resultados
  } catch (error) {
    console.log(error); // Manejo de errores
  } finally {
    await dbInstance.close(); // Cerrar la conexión al finalizar
  }
})(); */
// Ejemplo de uso del Singleton Database
/* (async () => {
  const dbInstance = Database.getInstance();

  try {
    const [results, fields] = await dbInstance.query("SELECT * FROM admin");
    console.log(results); // Resultados de la consulta
    console.log(fields); // Metadatos adicionales de los resultados
  } catch (error) {
    console.log(error); // Manejo de errores
  } finally {
    await dbInstance.close(); // Cerrar la conexión al finalizar
  }
})(); */
