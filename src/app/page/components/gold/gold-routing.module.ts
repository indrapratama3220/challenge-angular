import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldComponent } from './components/gold.component';

const routes: Routes = [
  {
    path:'',
    component: GoldComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./gold-price/gold-buy-price/gold-buy-price.module').then((m) => m.GoldBuyPriceModule)
      },
      {
        path: 'sell-price',
        loadChildren: () => import('./gold-price/gold-sell-price/gold-sell-price.module').then((m) => m.GoldSellPriceModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldRoutingModule { }
