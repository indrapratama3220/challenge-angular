import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldPriceRoutingModule } from './gold-price-routing.module';
import { GoldPriceComponent } from './components/gold-price.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';


const COMPONENTS = [GoldPriceComponent]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    GoldPriceRoutingModule,
    ChartsModule,
    RouterModule
  ],exports:[...COMPONENTS]
})
export class GoldPriceModule { }
