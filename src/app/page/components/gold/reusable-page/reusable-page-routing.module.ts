import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';
import { ReusablePageComponent } from './reusable-page.component';

const routes: Routes = [
  {
    path:'',
    component: ReusablePageComponent, 
    children: [
      {
        path: 'gold',
        loadChildren: () => import('../gold.module').then((m) => m.GoldModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusablePageRoutingModule { }
