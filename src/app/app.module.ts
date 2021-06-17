import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PageModule } from './page/page.module';
import { TemplateModule } from './template/template.module';
import { BsNavbarDirective } from './shared/directives/bs-navbar/bs-navbar.directive';





@NgModule({
  declarations: [AppComponent],
  imports: [
    PageModule,
    TemplateModule,
    BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
