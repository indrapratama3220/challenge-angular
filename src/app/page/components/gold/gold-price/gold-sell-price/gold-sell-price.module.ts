import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldSellPriceRoutingModule } from './gold-sell-price-routing.module';
import { ChartsModule } from 'ng2-charts';
import { GoldSellPriceComponent } from './gold-sell-price.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [GoldSellPriceComponent],
  imports: [
    CommonModule,
    ChartsModule,
    GoldSellPriceRoutingModule,
    MatCardModule
  ], exports:[GoldSellPriceComponent]
})
export class GoldSellPriceModule { }
