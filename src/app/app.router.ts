import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// >> Routes
export const MAP_ROUTES: Routes = [
    { path: 'Users', loadChildren: './modules/Users/Users.router#UsersRouterModule'},
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
