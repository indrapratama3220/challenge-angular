import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { TemplateModule } from '../template/template.module';
import { ProductsModule } from './products/products.module';
import { BenefitsModule } from './benefits/register.module';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const COMPONENTS = [PageComponent, CarouselComponent, LoginComponent]
const IMPORTS = [CommonModule, TemplateModule, ProductsModule, BenefitsModule, SharedModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatIconModule, BrowserModule]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  exports:[PageComponent]
})

export class PageModule { }
