import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './page/home/home.module';
import { JumbotronModule } from './component/jumbotron/jumbotron.module';
import { NavbarModule } from './component/navbar/navbar.module';
import { RegisterModule } from './page/register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarModule } from './component/searchbar/searchbar.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    JumbotronModule,
    AppRoutingModule,
    HomeModule,
    RegisterModule,
    BrowserAnimationsModule,
    SearchbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
