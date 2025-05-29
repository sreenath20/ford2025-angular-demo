import { Component } from '@angular/core';
import { Wallet } from '../../model/wallet';
import { FormsModule } from '@angular/forms';
import { WalletService } from '../../services/wallet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  userWallet: Wallet = new Wallet();
  constructor(private walletService: WalletService) { }
  registerWalletUser() {
    console.log(JSON.stringify(this.userWallet));
    let observer: Observable<any> = this.walletService.resigisterNewWallet(this.userWallet);
    // custom validation
    observer.subscribe(
      {
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
}
