import { QuestionComponent } from './pages/Question/question.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/Users/users.component';
import { UsersTypesComponent } from './pages/UsersType/userstype.component';

const MAP_ROUTES: Routes = [
  {
    path: 'Users',
    component: UsersComponent
  },
  {
    path: 'UserTypes',
    component: UsersTypesComponent
  },
  {
    path: 'Questions',
    component: QuestionComponent
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
export class CRUDRouterModule { }
