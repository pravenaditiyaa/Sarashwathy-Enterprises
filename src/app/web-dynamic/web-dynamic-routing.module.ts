import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ItemsComponent } from './items/items.component';
import { BillsComponent } from './bills/bills.component';
import { InvoicesComponent } from './invoices/invoices.component';


const routes: Routes = [
  {
    path: 'dynamic',  component: WebDynamicComponent,
    children: [
      { path: 'dash', component: DashboardComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'bills', component: BillsComponent },
      { path: 'invoices', component: InvoicesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebDynamicRoutingModule { }