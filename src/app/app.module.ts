import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersModule } from './modules/Users/Users.module';
import { ModuleRouting } from './app.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsersModule,
    BrowserModule,
    ModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
