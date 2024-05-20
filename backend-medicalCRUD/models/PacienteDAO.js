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
  datesForPatient = async (user) => {
    let instanciaObjetoConexion = Connection.getInstance();
    const { id_usuario } = user;
    try {
      const [results, fields] = await instanciaObjetoConexion.query(
        'SELECT m.nombre as "Doctor", es.nombre as "Especialidad",c.fecha_hora as "Hora y fecha",s.nombre as "SEDE", mo.tipo as "Modalidad" FROM cita c INNER JOIN paciente p ON (c.id_paciente=p.id_paciente) INNER JOIN usuarios u ON(u.id_usuario=p.id_usuario) INNER JOIN medico m ON (c.id_medico=m.id_medico)INNER JOIN especialidad es ON(m.especialidad=es.id) INNER JOIN sede s ON (c.id_sede=s.id_sede) INNER JOIN modalidad_consulta mo ON (c.id_modalidad=mo.id_modalidad)WHERE u.id_usuario=?;',
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

/* const daoPaciente = new PacienteDAO();
//daoPaciente.read();
const pacientePrueba = {
  id_paciente: 1010,
  nombres: "Enrique",
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
let data=daoPaciente.datesForPatient(pacientePrueba);
console.log("Imprimiendo datos de la consulta"+data); */
export default PacienteDAO;
//daoPaciente.create(pacientePrueba);

//daoPaciente.update(pacientePrueba);

//daoPaciente.delete(pacientePrueba);

//daoPaciente.searchById(pacientePrueba);
