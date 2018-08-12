import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './modules/Users/Users.module';
import { LoginModule } from './modules/Login/Login.module';
import { TaskModule } from './modules/Task/Task.module';
// >> Routes
const MAP_ROUTES: Routes = [
  {
    path: 'Users',
    loadChildren: () => UsersModule
  },
  {
    path: 'Tasks',
    loadChildren: () => TaskModule
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: '',
    loadChildren: () => LoginModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(MAP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuleRouting { }
