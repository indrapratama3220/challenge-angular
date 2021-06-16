import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './components/product/product.module';
import { ProductPageComponent } from './components/product-page.component';

import { TemplateModule } from 'src/app/template/template.module';




@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductModule,
    TemplateModule
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
