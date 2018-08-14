import { CRUDModule } from './modules/CRUD/CRUD.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/Login/Login.module';
import { TaskModule } from './modules/Task/Task.module';
// >> Routes
const MAP_ROUTES: Routes = [
  {
    path: 'CRUD',
    loadChildren: () => CRUDModule
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
