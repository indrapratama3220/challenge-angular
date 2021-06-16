import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { TemplateComponent } from './components/template.component';


const COMPONENTS = [NavbarComponent, FooterComponent, JumbotronComponent, TemplateComponent];

@NgModule({
  declarations: [[...COMPONENTS]],
  imports: [
    CommonModule
  ], exports:[[...COMPONENTS]]
})
export class TemplateModule { }
