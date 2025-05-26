import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name:string="India";
  password:string="";

  constructor(private userService:UserService){}

  user={
    name:"",
    password:"",
    email:""
  }; // way to creat objects

  user2:User={name:"",password:""};// type define user

  userLogin(){
    console.log(this.user2.name +":"+this.user2.password);
    //this.name="";
    // hit back end for login if 
    // successful store user info in service

    this.userService.setData(this.user2.name);
  }

  getServiceDat(){
    console.log("data in sevice:"+this.userService.getData());
  }
}
