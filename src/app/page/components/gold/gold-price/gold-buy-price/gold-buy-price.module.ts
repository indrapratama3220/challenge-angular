import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldBuyPriceRoutingModule } from './gold-buy-price-routing.module';
import { GoldBuyPriceComponent } from './gold-buy-price.component';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [GoldBuyPriceComponent],
  imports: [
    CommonModule,
    GoldBuyPriceRoutingModule,
    ChartsModule,
    MatCardModule
  ],exports:[GoldBuyPriceComponent]
})
export class GoldBuyPriceModule { }
