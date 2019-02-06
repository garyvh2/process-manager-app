import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './pages/Process/process.component';
import { ProcessService } from './Process.service';
import { ProcessRouterModule } from './Process.router';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    ProcessRouterModule
  ],
  declarations: [
    ProcessComponent
  ],
  exports: [
    ProcessComponent
  ],
  providers: [
    ProcessService
  ]
})
export class ProcessModule { }
