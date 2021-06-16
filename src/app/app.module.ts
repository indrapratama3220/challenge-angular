import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { HomeModule } from './page/home/home.module';
import { TemplateModule } from './template/template.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HomeModule,
    TemplateModule,
    BrowserModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
