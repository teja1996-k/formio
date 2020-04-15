import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormioModule, FormioAppConfig} from 'angular-formio';
import { FormioGrid} from 'angular-formio/grid';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    FormioGrid
  ],
  providers:    [ {provide: FormioAppConfig, useValue: {
    appUrl: 'https://examples.form.io',
    apiUrl: 'https://api.form.io',
    icons: 'fontawesome'
  }} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
