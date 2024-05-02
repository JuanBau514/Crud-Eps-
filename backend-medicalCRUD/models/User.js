export default class User {

    /**
     * 
     * @param {email String, password String, name String, active Boolean} userData 
     */
    constructor( { email, password, name, active } ) {
        this.email       = email;
        this.password    = password;
        this.name        = name;
        this.active      = active;
    }
}
