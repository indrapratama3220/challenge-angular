import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RegisterComponent } from './components/register.component';


import { TemplateModule } from 'src/app/template/template.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './form/form.component';



const COMPONENTS = [RegisterComponent, FormComponent]

@NgModule({
  declarations: [[...COMPONENTS]],
  imports: [
    CommonModule,
    TemplateModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    
    
  ],
  exports: [RegisterComponent]
})

export class RegisterModule { }
