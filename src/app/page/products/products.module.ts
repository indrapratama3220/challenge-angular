import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TemplateModule } from 'src/app/template/template.module';
import { ProductComponent } from './components/product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ ProductComponent],
  imports: [
    CommonModule,
    TemplateModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    TemplateModule,
    SharedModule
  ],
  exports: [ProductComponent]
})
export class ProductsModule { }
