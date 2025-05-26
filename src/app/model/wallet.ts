export class Wallet {

    id:number;
    name:string;
    password:string;
    email:string;
    city?:string;

    constructor(id:number,name:string,password:string,email:string){
        this.id=id;
        this.name=name;
        this.password=password;
        this.email=email;
    }    
}
