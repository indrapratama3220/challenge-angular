import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldBuyPriceComponent } from './gold-buy-price.component';

const routes: Routes = [
  {
    path: '',
    component: GoldBuyPriceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldBuyPriceRoutingModule { }
