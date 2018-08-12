import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskRouterModule } from './Task.router';
import { TaskComponent } from './pages/Task/task.component';
import { DynamicFormModule } from '../../shared/components/dynamic-form/dynamic-form.module';
import { TaskService } from './Task.service';


@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    TaskRouterModule
  ],
  declarations: [
    TaskComponent
  ],
  exports: [
    TaskComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
