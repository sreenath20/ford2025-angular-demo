export class Wallet {

    id:number;
    name:string;
    balance:number;
    password:string;
    email:string;
    city?:string;

    constructor(id:number,name:string,balance:number,password:string,email:string){
        this.id=id;
        this.name=name;
        this.balance=balance;
        this.password=password;
        this.email=email;
    }        
}

//  "id": 7952,
//     "name": "ford 5",
//     "balance": 6055,
//     "email": "u5@ford.com",
//     "password": null,
//     "address": null,
//     "city": null,