import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data:string="";

  constructor() { }
  public setData(newData:string):void{
    this.data=newData;
    console.log("UserService setData:"+this.data);
  }
  public getData():string{
    return this.data;
  }
}
