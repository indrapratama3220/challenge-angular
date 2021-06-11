import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronModule } from '../jumbotron/jumbotron.module';
import { NavbarModule } from '../navbar/navbar.module';
import { RegisterComponent } from './register.component';

import { AppRoutingModule } from '../app-routing.module';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    JumbotronModule,
    NavbarModule,
    AppRoutingModule,
    FormModule
  ],
  exports: [RegisterComponent]
})

export class RegisterModule { }
