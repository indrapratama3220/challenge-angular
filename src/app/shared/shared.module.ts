import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './directives/bs-navbar/bs-navbar.directive';
import { CustomDatePipe } from './pipes/custom-date.pipe';

import { TitleCasePipe } from './pipes/title-case.pipe';
import { CustomCasePipe } from './pipes/custom-case.pipe';



@NgModule({
  declarations: [BsNavbarDirective, CustomDatePipe, TitleCasePipe, CustomCasePipe],
  imports: [
    CommonModule
  ],exports:[BsNavbarDirective, CustomDatePipe, TitleCasePipe, CustomCasePipe],
  providers:[TitleCasePipe]
})
export class SharedModule { }
