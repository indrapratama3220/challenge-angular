import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TemplateComponent } from './components/template.component';
import { SharedModule } from '../shared/shared.module';


const COMPONENTS = [NavbarComponent, FooterComponent, TemplateComponent];

@NgModule({
  declarations: [[...COMPONENTS]],
  imports: [
    CommonModule,
    SharedModule
  ], exports:[[...COMPONENTS]]
})
export class TemplateModule { }
