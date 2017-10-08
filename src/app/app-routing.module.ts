import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './web-static/home/home.component';
import { AboutComponent } from './web-static/about/about.component';
import { ContactComponent } from './web-static/contact/contact.component';
import { LoginComponent } from './web-static/login/login.component';

import { WebDynamicComponent } from './web-dynamic/web-dynamic.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'UserlogedIn',     component: WebDynamicComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}