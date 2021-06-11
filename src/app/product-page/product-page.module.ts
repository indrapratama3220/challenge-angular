import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { ProductPageComponent } from './product-page.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductModule,
    FooterModule
  ],
  exports: [ProductPageComponent]
})
export class ProductPageModule { }
