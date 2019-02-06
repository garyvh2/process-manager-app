import { FieldConfig } from './../../../../models/interface/FieldConfig';
import { DynamicFormComponent } from './../../../../shared/components/dynamic-form/dynamic-form.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: '../../partials/CRUD.component.html',
  styleUrls: ['../../partials/CRUD.component.css']
})
export class QuestionComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username..',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Select',
      name: 'test',
      options: ['Advert', 'Word of mouth', 'Other'],
      placeholder: 'Select an option..',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.setDisabled('submit', true);
    this.form.setValue('username', 'Todd Motto');

    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });


  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
