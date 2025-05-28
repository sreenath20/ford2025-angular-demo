import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { Wallet } from '../../model/wallet';

@Component({
  selector: 'app-display-wallets',
  imports: [],
  templateUrl: './display-wallets.component.html',
  styleUrl: './display-wallets.component.css'
})
export class DisplayWalletsComponent implements OnInit{

  constructor(private walletService:WalletService){}

  wallets:Wallet[]=[]; // create wallet array and allocate memory

  ngOnInit(): void {
    
    this.walletService.getAllWallets().subscribe( // hit back end
      {
        next:(data)=>{ // success call back // 200 to 299
          console.log(data);
        },
        error:(error)=>{ // error call back / if status code 400 -499
          console.log(error);          
        }
      }
    )


  }

  
}
