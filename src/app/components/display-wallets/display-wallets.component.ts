import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from '../../model/wallet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-wallets',
  imports: [CommonModule],
  templateUrl: './display-wallets.component.html',
  styleUrl: './display-wallets.component.css',
  standalone: true
})
export class DisplayWalletsComponent implements OnInit {

  wallets: Wallet[] = []; // create wallet array and allocate memory

  constructor(private walletService: WalletService) { } // DI


  ngOnInit(): void {
    this.loadWalletsData();
  }

  loadWalletsData() {
    this.walletService.getAllWallets().subscribe( // hit back end
      {
        next: (data) => { // success call back // 200 to 299
          console.log(data);
          this.wallets = data;
        },
        error: (error) => { // error call back / if status code 400 -499
          console.log(error);
        }
      }
    )
  }
  deleteUser(email?: string) {
    console.log(email);
    this.walletService.deleteUserWalletByEmail(email).subscribe(
      {
        next: (data) => { // success call back // 200 to 299
          console.log(data);
          // refresh or reload data
        //  this.loadWalletsData(); // reloads from back end
          this.wallets = this.wallets.filter(w=>w.email !== email);
          // delets from data member wallets array

        },
        error: (error) => { // error call back / if status code 400 -499
          console.log(error);
        }
      }
    )
  }

}
