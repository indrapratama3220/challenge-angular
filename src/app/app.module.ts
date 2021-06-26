import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';


    
const IMPORTS = [ AppRoutingModule, BrowserModule, BrowserAnimationsModule,TemplateModule, MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule, MatIconModule]

@NgModule({
  declarations: [AppComponent],
  imports: [[...IMPORTS]],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
