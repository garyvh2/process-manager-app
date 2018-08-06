import { FormButtonComponent } from './../partials/button/button.component';
import { FormSelectComponent } from './../partials/select/select.component';
import { FormInputComponent } from './../partials/input/input.component';
import { DynamicFieldDirective } from './../../directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  ],
})
export class DynamicFormModule {}
