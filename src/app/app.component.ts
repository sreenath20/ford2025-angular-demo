import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,NgIf,NgFor,LoginComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Wallet Application';
  name = "Ford";
  pi = 3.14;
  height = "10";
  width = 20.55;
  imageUrl = "https://www.w3schools.com/HTML/w3schools.jpg";
    employee = {
    "id":1,
    "name":"Sreenath",
    "email":"sree@gmail.com"
  };
  isDisabled:boolean =false;
  inputType = "button";
  buttonValue = "Login";

  login(){
    console.log("login clicked");
    console.log(this.name)
  }
  isEligible:boolean= true;
  toggleDiv(){
    this.isEligible = ! this.isEligible;
  }
  names:string[] = ["India","USA","Germany"]; // array initialization
  values:number[]=[10,20,30];
  isEligibleArray:boolean[]=[]; // to initilise boolean array to emty array

  products=[
    {"id":1,"name":"Hp Laptop","price":10000.0},
     {"id":2,"name":"Dell Laptop","price":20000.0}
  ];
}
