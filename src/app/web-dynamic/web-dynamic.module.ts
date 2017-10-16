
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule, SharedModule, DialogModule } from 'primeng/primeng';

import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    RouterModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    FormsModule,
    CommonModule

  ],
  declarations: [
    WebDynamicComponent,
    DashboardComponent,
    ContactsComponent
  ],
  providers: [],
  bootstrap: []
})
export class WebDynamicModule { }
