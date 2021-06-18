import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarDirective } from './directives/bs-navbar/bs-navbar.directive';
import { CustomDatePipe } from './pipes/custom-date.pipe';

import { TitleCasePipe } from './pipes/title-case.pipe';


const COMPONENTS = [BsNavbarDirective, CustomDatePipe, TitleCasePipe]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],exports:[...COMPONENTS],
  providers:[TitleCasePipe]
})
export class SharedModule { }
