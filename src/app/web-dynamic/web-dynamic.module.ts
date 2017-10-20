
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';

import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ItemsComponent } from './items/items.component';
import { BillsComponent } from './bills/bills.component';
import { InvoicesComponent } from './invoices/invoices.component';

@NgModule({
  imports: [
    RouterModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    FormsModule,
    CommonModule,
    ButtonModule

  ],
  declarations: [
    WebDynamicComponent,
    DashboardComponent,
    ContactsComponent,
    ItemsComponent,
    BillsComponent,
    InvoicesComponent
  ],
  providers: [],
  bootstrap: []
})
export class WebDynamicModule { }
