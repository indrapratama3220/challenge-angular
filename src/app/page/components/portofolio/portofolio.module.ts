import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortofolioRoutingModule } from './portofolio-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PortofolioComponent } from './components/portofolio.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ PortofolioComponent],
  imports: [
    CommonModule,
    PortofolioRoutingModule,
    MatCardModule,
    MatButtonModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatIconModule,
    ChartsModule
    
     
  ], exports:[PortofolioComponent]
})
export class PortofolioModule { }
