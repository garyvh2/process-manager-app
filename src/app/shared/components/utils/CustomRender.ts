import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { HumanizeFactory } from './humanize/HumanizeFactory';
import { Humanizer } from './humanize/Humanizer';


@Component({
  template: `{{renderValue}}`,
})
export class CustomRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string;
  @Input() rowData: any;

  ngOnInit() {
    const humanizer: Humanizer = (new HumanizeFactory()).create(this.value.constructor.name);
    this.renderValue = humanizer.process(this.value);
  }

}
