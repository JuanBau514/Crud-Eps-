export default class Paciente {
  /**
   *
   * @param {id_paciente number, nombres String, apellidos String, fecha_naci DATE, lugar_naci number, direccion_re String, direccion_cor String, estrato number, ciudad_resi number, ciudad_afili number,id_usuario number} pacienteData
   */
  constructor({
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
    id_usuario,
  }) {
    this.id_paciente = id_paciente;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.fecha_naci = fecha_naci;
    this.lugar_naci = lugar_naci;
    this.direccion_re = direccion_re;
    this.direccion_cor = direccion_cor;
    this.estrato = estrato;
    this.ciudad_resi = ciudad_resi;
    this.ciudad_afili = ciudad_afili;
    this.id_usuario = id_usuario;
  }
}
