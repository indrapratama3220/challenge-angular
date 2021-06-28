import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page.component';
import { TemplateModule } from '../template/template.module';
import { BenefitsModule } from './components/landing/components/benefits/benefits.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PageRoutingModule } from './page-routing.module';






const COMPONENTS = [PageComponent]
const IMPORTS = [PageRoutingModule, CommonModule, TemplateModule, BenefitsModule, SharedModule, MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatIconModule, SharedModule]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  exports: [...COMPONENTS]
})

export class PageModule { }
