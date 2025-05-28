import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private httpClient:HttpClient) { }

  getAllWallets():Observable<any>{

   let url:string="http://localhost:8080/v1/wallet/all";
    return this.httpClient.get(url);
  }

}
