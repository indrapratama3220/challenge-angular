import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './directives/bs-navbar/bs-navbar.directive';



@NgModule({
  declarations: [BsNavbarDirective],
  imports: [
    CommonModule
  ],exports:[BsNavbarDirective]
})
export class SharedModule { }
