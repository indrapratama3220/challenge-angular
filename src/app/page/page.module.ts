import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { TemplateModule } from '../template/template.module';
import { ProductsModule } from './products/products.module';
import { BenefitsModule } from './benefits/register.module';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [PageComponent, CarouselComponent],
  imports: [
    CommonModule,
    TemplateModule,
    ProductsModule,
    BenefitsModule
  ],exports:[PageComponent]
})
export class PageModule { }
