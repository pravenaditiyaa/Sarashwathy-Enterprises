
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WebDynamicComponent } from './web-dynamic.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    WebDynamicComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: []
})
export class WebDynamicModule { }
