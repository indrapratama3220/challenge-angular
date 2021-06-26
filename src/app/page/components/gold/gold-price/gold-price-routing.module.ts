import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldPriceComponent } from './components/gold-price.component';
import { GoldBuyPriceComponent } from './gold-buy-price/gold-buy-price.component';



const routes: Routes = [
    {
      path: '',
      component: GoldPriceComponent,
      children: [
        // {
        //   path: 'buy-price',
        //   loadChildren: () => import('./gold-buy-price/gold-buy-price.module').then((m) => m.GoldBuyPriceModule)
        // },
        // {
        //   path: 'sell-price',
        //   loadChildren: () => import('./gold-sell-price/gold-sell-price.module').then((m) => m.GoldSellPriceModule)
        // },    
      ]
    },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldPriceRoutingModule { }
