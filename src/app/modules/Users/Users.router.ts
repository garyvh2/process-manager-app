import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/Users/users.component';

const MAP_ROUTES: Routes = [
  {
    path: 'List',
    component: UsersComponent
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
