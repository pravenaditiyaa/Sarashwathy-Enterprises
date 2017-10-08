import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomeComponent } from './web-static/home/home.component';
import { AboutComponent } from './web-static/about/about.component';
import { ContactComponent } from './web-static/contact/contact.component';
import { LoginComponent } from './web-static/login/login.component';
import { WebDynamicComponent } from './web-dynamic/web-dynamic.component';



@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    WebDynamicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
