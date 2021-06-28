import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusablePageRoutingModule } from './reusable-page-routing.module';
import { ReusablePageComponent } from './reusable-page.component';
import { GoldModule } from '../gold.module';



@NgModule({
  declarations: [ReusablePageComponent],
  imports: [
    CommonModule,
    ReusablePageRoutingModule,
    GoldModule
  ]
})
export class ReusablePageModule { }
