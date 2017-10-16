import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {
    path: 'dynamic',  component: WebDynamicComponent,
    children: [
      { path: 'dash', component: DashboardComponent },
      { path: 'contacts', component: ContactsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebDynamicRoutingModule { }