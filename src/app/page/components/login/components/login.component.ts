import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { FlashService } from 'src/app/shared/services/flash.service';
import { Customer } from '../../portofolio/models/customer.model';
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
              private readonly router: Router,
              private readonly loginService: LoginService,
              private readonly flash: FlashService
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
    const redirectBackUrl = this.flash.get();

    this.loginService.login({
      email: loginData.email,
      password: loginData.password
    }).subscribe((response) => {
      if(response) {
        this.customer = response;
        sessionStorage.setItem('id', this.customer.id);
        this.router.navigateByUrl(redirectBackUrl || '/')
        
      }
    }), (error) => {
      const message = error.error.error
      alert(message)
    }
  }
}
