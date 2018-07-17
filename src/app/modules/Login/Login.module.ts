import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/Login/login.component';
import { LoginService } from './Login.service';
import { LoginRouterModule } from './Login.router';

@NgModule({
  imports: [
    CommonModule,
    LoginRouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
