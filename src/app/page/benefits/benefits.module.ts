import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TemplateModule } from 'src/app/template/template.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BenefitsListComponent } from './components/benefits-list/benefits-list.component';
import { BenefitsComponent } from './components/benefits.component';



const COMPONENTS = [ BenefitsListComponent, BenefitsComponent]

@NgModule({
  declarations: [[...COMPONENTS]],
  imports: [
    CommonModule,
    TemplateModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [BenefitsComponent]
})

export class BenefitsModule { }
