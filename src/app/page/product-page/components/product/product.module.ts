import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TemplateModule } from 'src/app/template/template.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    TemplateModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
