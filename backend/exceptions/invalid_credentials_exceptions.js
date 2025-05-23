export class invalidcredentialsexceptions extends Error {
    constructor(){
        super('argumentos invalidos.');
        this.statuscode=400;
    }
}