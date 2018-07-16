import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersModule } from './modules/Users/Users.module';
import { ModuleRouting } from './app.router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsersModule,
    BrowserModule,
    Ng2SmartTableModule,
    HttpClientModule,

    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    SharedModule,
    ModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
