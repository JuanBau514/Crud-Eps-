import Paciente from "../models/Paciente.js";
import UserDAO from "../models/UserDAO.js";
import PacienteDAO from "../models/PacienteDAO.js";
import CitasDAO from "../models/CitasDAO.js";

export class PatientController {
  static modificatedPatient = async (id_usuario, newData) => {
    const instanciaPacienteConsulta = new PacienteDAO();
    const dataUser = await instanciaPacienteConsulta.getPatienID(id_usuario);
    if (!dataUser) {
      throw new Error("No se encontro paciente");
    }
    const { nombres, apellidos, email, direccion_re, telefono } = newData;
    const id_paciente = dataUser.id_paciente;

    const patient = instanciaPacienteConsulta.updatedManualValues({
      nombres,
      apellidos,
      direccion_re,
      id_paciente,
    });
    const phone = instanciaPacienteConsulta.updateTelefono({
      telefono: telefono,
      id_paciente: id_paciente,
    });
    if (!patient || !phone) {
      throw new Error("No hay un usuario según las credenciales previstas");
    }
    console.log("Actualizacion exitosa");
  };

  static getPatient = async (id_usuario) => {
    console.log(id_usuario);
    const instanciaPacienteConsulta = new PacienteDAO();
    const dataUser = await instanciaPacienteConsulta.dataPacienteByUserId(
      id_usuario
    );
    if (!dataUser) {
      throw new Error("No se encontro paciente");
    }
    return dataUser;
  };

  static assignDate = async (id_usuario, data) => {
    const instanciaPacienteConsulta = new PacienteDAO();
    const instanciaCitasConsulta = new CitasDAO();
    const dataUser = await instanciaPacienteConsulta.getPatienID(id_usuario);
    if (!dataUser) {
      throw new Error("No se encontro paciente");
    }
    const id_paciente = dataUser.id_paciente;
    const { fecha_hora, id_medico, id_sede, id_modalidad, asistencia } = data;
    const result = await instanciaCitasConsulta.create({
      fecha_hora,
      id_paciente,
      id_medico,
      id_sede,
      id_modalidad,
      asistencia,
    });
  };

  static restDates = async (id_usuario) => {
    const instanciaCitasConsulta = new CitasDAO();
    const dataDates = await instanciaCitasConsulta.restDatesForPatient(
      id_usuario
    );
    if (!dataDates) {
      throw new Error("No se encontro citas");
    }
    console.log(dataDates);
    return dataDates;
  };
}
