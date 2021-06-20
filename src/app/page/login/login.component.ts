import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginData } from 'src/app/shared/models/login';
import { UtilsService } from 'src/app/shared/services/utils.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() outputTask: EventEmitter <boolean> = new EventEmitter();
  hide: boolean = true;

  constructor(private fb: FormBuilder,
              private utilService: UtilsService) {
  }

  ngOnInit() {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin(): void {
    if (!this.loginForm.valid) return;
    const loginData: LoginData = this.loginForm.value
    this.utilService.postLoginData(loginData)
  }

}
