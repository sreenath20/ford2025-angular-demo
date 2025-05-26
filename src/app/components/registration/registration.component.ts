import { Component } from '@angular/core';
import { Wallet } from '../../model/wallet';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userWallet :Wallet = new Wallet(0,"","","");
  registerWalletUser(){
    console.log(JSON.stringify(this.userWallet ));
  }
}
