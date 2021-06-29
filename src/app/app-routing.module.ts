import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './page/components/gold/transaction/transaction.component';
import { TransactionModule } from './page/components/gold/transaction/transaction.module';




const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./page/components/login/login.module').then((m) => m.LoginModule), 
  },
  {
      path: '',
      loadChildren: () => import('./page/page.module').then(m => m.PageModule),
  },
  {
    path: 'transaction',
    loadChildren: () => import('./page/components/gold/transaction/transaction.module').then(m => m.TransactionModule),
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
