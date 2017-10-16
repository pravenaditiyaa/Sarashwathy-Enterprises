
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebStaticComponent } from './web-static.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    WebStaticComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class WebStaticModule { }
