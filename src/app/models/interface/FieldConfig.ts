import { Question } from './../Question';
import { ValidatorFn } from '@angular/forms';

export interface FieldConfig extends Question {
  disabled?: boolean;
  type: string;
  selectName?: string;
  endpoint?: string;
  validation?: ValidatorFn[];
}
