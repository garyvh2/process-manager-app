import { TaskComponent } from './pages/Task/task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAP_ROUTES: Routes = [
  {
    path: 'View',
    component: TaskComponent
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
export class TaskRouterModule { }
