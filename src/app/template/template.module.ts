import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TemplateComponent } from './components/template.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';


const COMPONENTS = [ FooterComponent, TemplateComponent, HeaderComponent];

@NgModule({
  declarations: [[...COMPONENTS]],
  imports: [
    CommonModule,
    SharedModule
  ], exports:[[...COMPONENTS]]
})
export class TemplateModule { }
