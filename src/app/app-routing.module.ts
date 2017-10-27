import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './web-static/home/home.component';
import { WebStaticComponent } from './web-static/web-static.component';

const routes: Routes = [
  { path: '', redirectTo: 'static/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
