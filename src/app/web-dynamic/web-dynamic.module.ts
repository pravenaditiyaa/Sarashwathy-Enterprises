
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';

import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ItemsComponent } from './items/items.component';

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
    ItemsComponent
  ],
  providers: [],
  bootstrap: []
})
export class WebDynamicModule { }
