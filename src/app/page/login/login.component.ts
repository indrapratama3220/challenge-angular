import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Login } from 'src/app/shared/models/login';
import { UtilsService } from 'src/app/shared/services/utils.service';


export const AUTH_TOKEN_KEY = 'auth_token'
export const AUTH_USER_DATA = 'user_data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  hide: boolean = true;

  constructor(private fb: FormBuilder,
              private utilService: UtilsService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin(): void {

    const loginData: Login = this.loginForm.value
    if (!this.loginForm.valid) {
      return;
    }
    this.utilService.login(loginData)
  }

}
