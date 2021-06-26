import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishtlistsRoutingModule } from './wishtlists-routing.module';
import { WishtlistsComponent } from './wishtlists.component';


@NgModule({
  declarations: [
    WishtlistsComponent
  ],
  imports: [
    CommonModule,
    WishtlistsRoutingModule
  ], exports:[WishtlistsComponent]
})
export class WishtlistsModule { }
