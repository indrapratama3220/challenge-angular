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
            pathMatch:'full',
            loadChildren: () => import('./gold-price/gold-price.module').then((m) => m.GoldPriceModule), //Lazy Load
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule ]
})
export class GoldRoutingModule { }
