import { Injectable } from '@angular/core';
import { LoginData } from '../models/login';


export const AUTH_USER_DATA = 'user_data'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
  
  login(authData: LoginData) {
    sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData))
    console.log(sessionStorage);
  }
}
