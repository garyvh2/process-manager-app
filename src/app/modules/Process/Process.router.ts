import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './pages/Process/process.component';


const MAP_ROUTES: Routes = [
  {
    path: 'List',
    component: ProcessComponent
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
export class ProcessRouterModule { }
