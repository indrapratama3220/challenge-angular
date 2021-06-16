import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from './components/home.component';
import { TemplateModule } from 'src/app/template/template.module';
import { ProductModule } from '../product-page/components/product/product.module';
import { RegisterModule } from '../register/register.module';
import { ProductPageModule } from '../product-page/product-page.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    TemplateModule,
    ProductModule,
    ProductPageModule,
    RegisterModule
  ],
  exports: [HomeComponent]
})


export class HomeModule { }
