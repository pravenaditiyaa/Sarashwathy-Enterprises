import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WebStaticComponent } from './web-static.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'static',  component: WebStaticComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebStaticRoutingModule { }