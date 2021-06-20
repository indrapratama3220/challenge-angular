import { Injectable, EventEmitter,Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { LoginData } from '../models/login';


export const AUTH_USER_DATA = 'user_data'

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor() { }
  
  async postLoginData(authData: LoginData): Promise <void> {
    sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData))
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // This is where thecode going to be implement, if it does return token then the session would inform that the password or email are invalid
        console.log(sessionStorage);
        resolve()
      }, 3000)   
      });
  }
}
