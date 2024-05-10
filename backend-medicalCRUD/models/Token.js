export default class Token {

    /**
     * 
     * @param {token String, userID Integer, createdAt Date} tokenData 
     */
    constructor( { token, userID, createdAt } ) {
        this.token         = token;
        this.userID        = userID;
        this.createdAt     = createdAt;
    }
}
