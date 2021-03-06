import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl= "https://localhost:44356/api/auth/";   // burasi backend Apinin html adresi
  constructor(private httpClient:HttpClient) { }


login(loginModel:LoginModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>> (this.apiUrl + "login", loginModel)
}


// register durumunu kontrol eden bir yapi kuralim. 
isAuthenticated (){
if(localStorage.getItem("token")){
  return true;
  }
  else {
    return false;
  }
}


}
