import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/Users/users.component';
import { UserService } from './Users.service';
import { UsersRouterModule } from './Users.router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersTypesComponent } from './pages/UsersType/userstype.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    UsersRouterModule
  ],
  declarations: [
    UsersComponent,
    UsersTypesComponent
  ],
  exports: [
    UsersComponent,
    UsersTypesComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
