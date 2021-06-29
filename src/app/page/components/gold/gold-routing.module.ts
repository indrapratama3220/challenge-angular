import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldComponent } from './components/gold.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path:'',
    component:GoldComponent, 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoldRoutingModule { }
