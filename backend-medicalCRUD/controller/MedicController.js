import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import UserDAO from '../models/UserDAO.js';
import PacienteDAO from '../models/PacienteDAO.js';
import MedicoDAO from '../models/MedicoDAO.js';
import CitasDAO from '../models/CitasDAO.js';

export class MedicController {
    static listarCitasController = async (id_usuario) => {
        try {
            console.log("Entrando a listar citas desde el controlador");
            const instanciaMedic = new MedicoDAO();
            const objectMedic = await instanciaMedic.searchByIdUser(id_usuario);
            const cites = await instanciaMedic.searchCites(objectMedic.id_medico);
            
            await instanciaMedic.close();
            console.log("Se ha hecho de manera exitosa la consulta de listar citas");
            return cites;
        } catch (error) {
            console.error("Error listando citas", error);
            throw new Error(error.message);
        }
    }

    static examModify = async (idCita, nombreExamen, tipoExamen, resultadoExamen) => {
        try {
            console.log("Entrando a modificar examen desde el controlador");
            
            const instanciaExamenModificar = new MedicoDAO();
            const objetoAct = await instanciaExamenModificar.updateExam(parseInt(idCita), parseInt(nombreExamen), tipoExamen, resultadoExamen);
            if (!objetoAct) {
                await instanciaExamenModificar.insertarExamen(parseInt(idCita), parseInt(nombreExamen), tipoExamen, resultadoExamen);
            }
            await instanciaExamenModificar.close();
            console.log("Se ha hecho de manera exitosa la modificación del examen");
            return;
        }catch (error) {
            console.error("Error en modificar examen", error);
            throw new Error(error.message);            
        }
    }

    static actualizarDiagnostico = async(idCita, descripcion, fechaDiagnostico) => {
        try {
            console.log("Entrando a actualizar diagnóstico");
            
            const instaciaActualizarDiagnostico = new MedicoDAO();
            const objetoAct = await instaciaActualizarDiagnostico.updateDiagnostic(parseInt(idCita), descripcion, fechaDiagnostico);
            if (!objetoAct) {
                await instaciaActualizarDiagnostico.insertarDiagnostico(parseInt(idCita), descripcion, fechaDiagnostico);
            }
            await instaciaActualizarDiagnostico.close();
            console.log("Se ha hecho de manera exitosa la modificación del diagnóstico");
        }catch(error) {
            console.error("Error en diagnóstico", error);
            throw new Error(error.message);   
        }
    }

    static  actualizarAsistencia = async (idCita, asistencia) => {
        try {
            console.log("Entrando a actualizar asistencia");
            
            const instaciaActualizarAsistencia = new MedicoDAO();
            await instaciaActualizarAsistencia.updateAssist(parseInt(idCita), parseInt(asistencia));
            await instaciaActualizarAsistencia.close();
            console.log("Se ha hecho de manera exitosa la modificación del diagnóstico");
        }catch(error) {
            console.error("Error en asistencia", error);
            throw new Error(error.message);   
        }

    }

    static obtenerDatosMedico = async (id_usuario) => {
        try {
            console.log("Entrando a obtener datos medico");
            
            const instaciaDatosMedico = new MedicoDAO();
            const objMedic = await instaciaDatosMedico.searchByIdUser(parseInt(id_usuario));
            
            await instaciaDatosMedico.close();
            
            console.log("Se ha hecho de manera exitosa la modificación del diagnóstico");
            return objMedic;
        }catch(error) {
            console.error("Error en obtener datos médico", error);
            throw new Error(error.message);   
        }
    }

    static actualizarDatosMedico = async (id_medico, nombre, direccion, ciudad, especialidad, tipo_licencia, licencia_medica, id_usuario) => {
        try {
            console.log("Entrando a actualizar datos de medico");
            const medico = {
                id_medico: id_medico,
                nombre: nombre,
                direccion: direccion,
                ciudad: ciudad,
                licencia_medica: licencia_medica,
                especialidad: especialidad,
                tipo_licencia: tipo_licencia,
                id_usuario: id_usuario,
            };
            const instaciaDatosMedico = new MedicoDAO();
            await instaciaDatosMedico.update(medico);
            
            await instaciaDatosMedico.close();
            
            console.log("Se ha hecho de manera exitosa la actualización de datos");
            
        }catch(error) {
            console.error("Error en actualizar datos médico", error);
            throw new Error(error.message);   
        }
    }

}
