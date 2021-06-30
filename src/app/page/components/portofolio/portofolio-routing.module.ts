import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortofolioComponent } from './components/portofolio.component';
import { PortofolioModule } from './portofolio.module';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path:'',
    component: PortofolioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortofolioRoutingModule { }
