import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriesRoutingModule } from './histories-routing.module';
import { HistoriesComponent } from './histories.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HistoriesComponent
  ],
  imports: [
    CommonModule,
    HistoriesRoutingModule,
    MatCardModule
  ],exports:[HistoriesComponent]
})
export class HistoriesModule { }
