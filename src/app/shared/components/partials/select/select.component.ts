import { FieldConfig } from './../../../../models/interface/FieldConfig';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../../../models/interface/Field';

// @ts-ignore
@Component({
  selector: 'app-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
