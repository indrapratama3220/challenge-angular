import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldRoutingModule } from './gold-routing.module';
import { GoldComponent } from './components/gold.component';
import { GoldPriceModule } from './gold-price/gold-price.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [GoldComponent],
  imports: [
    CommonModule,
    GoldRoutingModule,
    GoldPriceModule,
     MatCardModule
  ], exports:[GoldComponent]
})
export class GoldModule { }
