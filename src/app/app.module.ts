import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WebStaticRoutingModule } from './web-static/web-static-routing.module';
import { WebDynamicRoutingModule } from './web-dynamic/web-dynamic-routing.module';

import { WebStaticModule } from './web-static/web-static.module';
import { WebDynamicModule } from './web-dynamic/web-dynamic.module';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebStaticRoutingModule,
    WebDynamicRoutingModule,
    WebStaticModule,
    WebDynamicModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
