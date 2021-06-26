import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishtlistsComponent } from './wishtlists.component';

const routes: Routes = [
  {
    path:'',
    component:WishtlistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishtlistsRoutingModule { }
