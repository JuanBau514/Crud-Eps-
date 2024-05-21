export default class User {

    /**
     * 
     * @param {id_usuario number, email String, password String, estado Boolean (0, 1), token String, token_creado String} userData 
     */
    constructor( { id_usuario, correo_usuario, password, estado, token, token_creado, type_user } ) {
        this.id_usuario           = id_usuario;
        this.correo_usuario       = correo_usuario;
        this.password             = password;
        this.estado               = estado;
        this.token                = token;
        this.token_creado         = token_creado;
        this.type_user            = type_user;
    }
}
