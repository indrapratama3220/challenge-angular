import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './components/product/product.module';
import { ProductPageComponent } from './components/product-page.component';
import { FooterModule } from '../../component/footer/footer.module';



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
