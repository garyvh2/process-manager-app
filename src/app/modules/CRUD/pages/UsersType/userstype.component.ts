import { CRUDService } from './../../CRUD.service';
import { Validators } from '@angular/forms';
import { FieldConfig } from './../../../../models/interface/FieldConfig';
import { DynamicFormComponent } from './../../../../shared/components/dynamic-form/dynamic-form.component';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '../../../../models/User';
import { ColumnGenerator } from '../../../../shared/components/utils/ColumnGenerator';
import { ConnService } from '../../../../shared/providers/database.service';
import { UserType } from '../../../../models/UserType';
import * as _ from 'underscore';

@Component({
  selector: 'app-users-types',
  templateUrl: '../../partials/CRUD.component.html',
  styleUrls: ['../../partials/CRUD.component.css']
})
export class UsersTypesComponent implements OnInit, AfterViewInit  {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  endpoint: String = 'usertypes';
  omit: string[] = ['userPassword', 'userGroup'];

  settings: Object;
  data: User[];
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'ID',
      name: 'userTypeId',
      disabled: true,
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Name',
      name: 'userTypeName',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor(private CRUDServ: CRUDService<UserType>, private ConnServ: ConnService) {
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
    this.ConnServ.create<UserType>({
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
