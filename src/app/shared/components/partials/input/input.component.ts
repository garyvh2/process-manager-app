import { FieldConfig } from './../../../../models/interface/FieldConfig';
import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/interface/Field';

// @ts-ignore
@Component({
  selector: 'app-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
