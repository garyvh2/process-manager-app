
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  template: `{{renderValue}}`,
})
export class CustomRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string;
  @Input() rowData: any;

  ngOnInit() {
    let object: any[] = JSON.parse(this.value);
    this.renderValue = object.join(', ').trim();
  }

}