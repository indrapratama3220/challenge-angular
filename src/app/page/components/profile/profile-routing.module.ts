import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile.component';


const routes: Routes = [
  {
      path:'',
      component: ProfileComponent, 
      children: [
          {
            path: '',
            loadChildren: () => import('./components/histories/histories.module').then((m) => m.HistoriesModule)
          },
          {
            path: 'wishtlists',
            loadChildren: () => import('./components/wishtlists/wishtlists.module').then((m) => m.WishtlistsModule)
          },
          {
            path: 'profile-setting',
            loadChildren: () => import('./components/profile-setting/profile-setting.module').then((m) => m.ProfileSettingModule)
          },
 
      ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
