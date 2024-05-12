
/**
 * 
 * @param {Date} fechaGuardada 'YYYY-MM-DD HH:MM:SS', es decir .toISOString().replace('T', ' ').substring(0, 19)
 * @returns diferencia en segundos
 */
export const comparaFecha = async (fechaGuardada) => {
    try {
            
        // Convertir la cadena a un objeto Date interpretándola como UTC-5
        const fechaGuardadaISO = `${fechaGuardada.replace(' ', 'T')}-05:00`;

        // Crear el objeto Date de fechaGuardada en UTC-5
        const fechaGuardadaObj = new Date(fechaGuardadaISO);

        // Verificar si la fecha es inválida
        if (isNaN(fechaGuardadaObj.getTime())) {
            throw new Error("La fecha ingresada es inválida", fechaGuardadaISO);
        }

        // Obtener la fecha actual
        const fechaUTC = new Date();

        // Formatear la fecha actual en el mismo formato UTC-5
        const fechaActualISO = `${fechaUTC.toISOString().replace('Z', '')}-05:00`;
        const fechaActualObj = new Date(fechaActualISO);

        // Calcular la diferencia en milisegundos
        const diferencia = fechaActualObj - fechaGuardadaObj;

        // Convertir la diferencia en segundos
        const diferenciaSegundos = diferencia / 1000;

        return diferenciaSegundos;
    }catch (error) {
        console.log('Hubo un error en comparar fecha');
        throw new Error(error.message);
    }
};
