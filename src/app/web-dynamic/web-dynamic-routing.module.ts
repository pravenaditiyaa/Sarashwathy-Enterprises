import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dynamic',  component: WebDynamicComponent,
    children: [
      { path: 'dash', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebDynamicRoutingModule { }