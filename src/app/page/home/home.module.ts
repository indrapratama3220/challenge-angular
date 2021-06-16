import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from './components/home.component';
import { TemplateModule } from 'src/app/template/template.module';

import { RegisterModule } from '../benefits/register.module';
import { ProductsModule } from '../products/products.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    TemplateModule,
    ProductsModule,
    
    RegisterModule
  ],
  exports: [HomeComponent]
})


export class HomeModule { }
