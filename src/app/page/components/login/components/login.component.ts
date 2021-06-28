import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Customer } from '../../gold/models/customer.model';
import { LoginService } from '../service/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() outputTask: EventEmitter <boolean> = new EventEmitter();
  hide: boolean = true;

  customer: Customer;

  constructor(private fb: FormBuilder,
              private readonly loginService: LoginService,
              ) {
  }

  ngOnInit() {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin(): void {
    if (!this.loginForm.valid) return;
    const loginData: any = this.loginForm.value;

    this.loginService.login({
      email: loginData.email,
      password: loginData.password
    }).subscribe((response) => {
      if(response) {
        console.log(response);
        
        this.customer = response;

        sessionStorage.setItem('id', this.customer.id);
      }
    }), (error) => {
      const message = error.error.error
      alert(message)
    }
  }

}
