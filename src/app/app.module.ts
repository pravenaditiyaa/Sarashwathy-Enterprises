import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DataTableModule, SharedModule, DialogModule } from 'primeng/primeng';

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
    WebDynamicModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
