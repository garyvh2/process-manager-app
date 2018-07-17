import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './modules/Users/Users.module';

// >> Routes
const MAP_ROUTES: Routes = [
  {
    path: 'Users',
    loadChildren: () => UsersModule
  },
  {
    path: '**',
    redirectTo: ''
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
