export default class User {

    /**
     * 
     * @param {email String, password String, name String, active Boolean} userData 
     */
    constructor( { id_usuario, correo_usuario, password, estado, token } ) {
        this.id_usuario           = id_usuario;
        this.correo_usuario       = correo_usuario;
        this.password             = password;
        this.estado               = estado;
        this.token                = token;
    }
}
