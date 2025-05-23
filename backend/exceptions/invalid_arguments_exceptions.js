export class Invalid_Arguments_exception extends Error{
    constructor(){
        super('argumentos invalidos.');
        this.statuscode=400;
    }
}