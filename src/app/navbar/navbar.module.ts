import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AppRoutingModule
  ]
})
export class NavbarModule { }
