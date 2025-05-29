import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService { // singleton 

  baseUrl: string = "http://localhost:8080/v1/wallet";
  constructor(private httpClient: HttpClient) { } // DI

  getAllWallets(): Observable<any> {

    return this.httpClient.get(this.baseUrl + "/all");
  }

  resigisterNewWallet(newWallet:Wallet):Observable<any>{
    return this.httpClient.post(this.baseUrl+"/phonepe",newWallet);
  }
  deleteUserWalletByEmail(email?:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/soft/"+email);
  }

}
