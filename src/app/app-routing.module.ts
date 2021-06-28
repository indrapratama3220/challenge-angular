import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './page/components/gold/transaction/transaction.component';




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
    component:TransactionComponent
},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
