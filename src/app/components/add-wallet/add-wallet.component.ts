import { Component } from '@angular/core';
import { Wallet } from '../../model/wallet';

@Component({
  selector: 'app-add-wallet',
  imports: [],
  templateUrl: './add-wallet.component.html',
  styleUrl: './add-wallet.component.css'
})
export class AddWalletComponent {

  newWallet:Wallet=new Wallet();
  
}
