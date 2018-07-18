import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/Users/users.component';
import { UsersTypesComponent } from './pages/UsersType/userstype.component';

const MAP_ROUTES: Routes = [
  {
    path: 'List',
    component: UsersComponent
  },
  {
    path: 'Types',
    component: UsersTypesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(MAP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRouterModule { }
