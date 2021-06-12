import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronModule } from '../../component/jumbotron/jumbotron.module';
import { NavbarModule } from '../../component/navbar/navbar.module';
import { RegisterComponent } from './components/register.component';

import { AppRoutingModule } from '../../app-routing.module';
import { FormModule } from './components/form/form.module';



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
