import { ConnService } from './../../../../shared/providers/database.service';
import { Validators } from '@angular/forms';
import { FieldConfig } from './../../../../models/interface/FieldConfig';
import { DynamicFormComponent } from './../../../../shared/components/dynamic-form/dynamic-form.component';
import { CRUDService } from './../../CRUD.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../../../../models/User';
import * as _ from 'underscore';
import { ValueTransformer } from '../../../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-users',
  templateUrl: '../../partials/CRUD.component.html',
  styleUrls: ['../../partials/CRUD.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit  {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  endpoint: String = 'users';
  omit: string[] = ['userPassword', 'userGroup'];

  settings: Object;
  data: User[];
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'ID',
      name: 'userId',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Name',
      name: 'userName',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Email',
      name: 'userEmail',
      validation: [Validators.required]
    },
    {
      type: 'select',
      label: 'User Type',
      endpoint: 'usertypes',
      selectName: 'userTypeName',
      name: 'userGroup',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor(private CRUDServ: CRUDService<User>, private ConnServ: ConnService) {
  }

  ngOnInit() {
    this.loadTable();
  }

  ngAfterViewInit() {
    let previousValid = this.form.valid;

    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
  }

  loadTable() {
    this.CRUDServ.fillTable(this.endpoint, this.omit).subscribe(data => {
      Object.assign(this, data);
    });
  }

  submit(value: {[name: string]: any}) {
    this.ConnServ.create<User>({
      endpoint: this.endpoint,
      obj: value
    }).subscribe(data => this.loadTable(), err => console.log(err));
  }

  onUserRowSelect (row: {[name: string]: any}) {
    const _this = this;
    const _fields = _.pluck(this.config, 'name');
    _.mapObject(row.data || {}, (val, key) => {
      if (!_.contains(_fields, key)) {
        return;
      }
      _this.form.setValue(key, val);
    });
  }

}
