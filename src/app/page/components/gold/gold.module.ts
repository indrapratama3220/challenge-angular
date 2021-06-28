import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldRoutingModule } from './gold-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { GoldComponent } from './components/gold.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ GoldComponent],
  imports: [
    CommonModule,
    GoldRoutingModule,
    MatCardModule,
    MatButtonModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatIconModule,
    ChartsModule
    
     
  ], exports:[GoldComponent]
})
export class GoldModule { }
