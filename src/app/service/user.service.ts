import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private baseURL: String= 'http://localhost:8000/api/v1/auth/'

  constructor(private http: HttpClient) { 
  }

  public signUp(userDate: any){
    console.log('userDetail', userDate);
    return this.http.post(this.baseURL+'register/user', userDate);
  }

  public logIn(userDate: any){
    console.log('userDetail', userDate);
    return this.http.post(this.baseURL+'login/user', userDate);
  }

}
