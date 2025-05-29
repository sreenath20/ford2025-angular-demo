import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CustomUpperCasePipe } from './pipes/custom-upper-case.pipe';
import { SquarePipe } from './pipes/square.pipe';
import { ArraySumPipe } from './pipes/array-sum.pipe';
import { SortProductPipe } from './pipes/sort-product.pipe';
import { SearchPipe } from './pipes/search.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],//,SearchPipe, SortProductPipe,ArraySumPipe,SquarePipe,CustomUpperCasePipe,CommonModule, FormsModule,NgIf,NgFor,LoginComponent,RegistrationComponent,AdminLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {

  // query:string="";
  // filterQuery:string="";
  // applyFilter(){
  //   this.filterQuery = this.query;
  // }

  // values:number[] = [5,7,9,10];

  // today:number = Date.now();

  
  // title:string = 'Wallet Application';
  // name = "Ford";
  // pi:number = 3.1415926535;
  // height = "10";
  // width = 20.55;
  // price:number=55.75;
  
  // imageUrl ="images/w3w3schools.jpg"; //"https://www.w3schools.com/HTML/w3schools.jpg";
  //   employee = {
  //   "id":1,
  //   "name":"Sreenath",
  //   "email":"sree@gmail.com"
  // };
  // isDisabled:boolean =false;
  // inputType = "button";
  // buttonValue = "Login";

  // login(){
  //   console.log("login clicked");
  //   console.log(this.name)
  // }
  // isEligible:boolean= true;
  // toggleDiv(){
  //   this.isEligible = ! this.isEligible;
  // }
  // names:string[] = ["India","USA","Germany"]; // array initialization
  // // values:number[]=[10,20,30];
  // isEligibleArray:boolean[]=[]; // to initilise boolean array to emty array

  // products=[
   
  //    {"id":3,"name":"Dell Laptop","price":25000.0},
  //    {"id":1,"name":"Acer Laptop","price":35000.0},
  //     {"id":5,"name":"Hp Laptop","price":15000.0},
  // ];
}
