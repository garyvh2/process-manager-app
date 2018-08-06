import { FieldConfig } from './../../../../models/interface/FieldConfig';
import { Field } from './../../../../models/interface/Field';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-form-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
