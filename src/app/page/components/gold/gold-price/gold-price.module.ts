import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldPriceRoutingModule } from './gold-price-routing.module';
import { GoldSellPriceComponent } from './gold-sell-price/gold-sell-price.component';
import { GoldBuyPriceComponent } from './gold-buy-price/gold-buy-price.component';
import { GoldPriceComponent } from './components/gold-price.component';
import { ChartsModule } from 'ng2-charts';


const COMPONENTS = [GoldSellPriceComponent, GoldBuyPriceComponent, GoldPriceComponent]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    GoldPriceRoutingModule,
    ChartsModule
  ],exports:[...COMPONENTS]
})
export class GoldPriceModule { }
