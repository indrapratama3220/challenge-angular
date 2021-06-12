import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronModule } from '../../component/jumbotron/jumbotron.module';
import { NavbarModule } from '../../component/navbar/navbar.module';
import { AppRoutingModule } from '../../app-routing.module';

import { HomeComponent } from './components/home.component';
import { RegisterModule } from '../register/register.module';
import { ProductPageModule } from '../product-page/product-page.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    JumbotronModule,
    NavbarModule,
    RegisterModule,
    ProductPageModule
  ],
  exports: [HomeComponent]
})


export class HomeModule { }
