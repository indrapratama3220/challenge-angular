import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./page/components/login/login.module').then((m) => m.LoginModule), 
  },
  {
      path: '',
      loadChildren: () => import('./page/page.module').then(m => m.PageModule),
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
