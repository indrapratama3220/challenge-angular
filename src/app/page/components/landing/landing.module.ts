import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './components/landing.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from '../login/login.component';
import { ProductComponent } from './components/products/product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { BenefitsModule } from './components/benefits/benefits.module';




const COMPONENTS = [LandingComponent, CarouselComponent, LoginComponent, ProductComponent]
const IMPORTS = [BenefitsModule, SharedModule, CommonModule, LandingRoutingModule, MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatIconModule]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS]
  ,exports:[]
})
export class LandingModule { }
