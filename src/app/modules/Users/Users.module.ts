import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/Users/users.component';
import { UserService } from './user.service';
import { UsersRouterModule } from './Users.router';

@NgModule({
  imports: [
    UsersRouterModule,
    CommonModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
