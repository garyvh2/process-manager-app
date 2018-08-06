import { DynamicFormComponent } from './dynamic-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULES = [
  DynamicFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule {}
