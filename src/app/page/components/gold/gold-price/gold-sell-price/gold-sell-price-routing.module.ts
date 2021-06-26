import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldSellPriceComponent } from './gold-sell-price.component';

const routes: Routes = [
  {
    path: '',
    component: GoldSellPriceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldSellPriceRoutingModule { }
