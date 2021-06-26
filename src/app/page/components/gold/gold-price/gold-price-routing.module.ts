import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldBuyPriceComponent } from './gold-buy-price/gold-buy-price.component';
import { GoldSellPriceComponent } from './gold-sell-price/gold-sell-price.component';

const routes: Routes = [
    {
      path: '',
      component: GoldBuyPriceComponent
    },
    {
      path: 'sell-price',
      component: GoldSellPriceComponent
    },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldPriceRoutingModule { }
