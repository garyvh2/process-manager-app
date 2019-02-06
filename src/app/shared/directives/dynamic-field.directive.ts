import { ConnService } from './../providers/database.service';
import { FieldConfig } from './../../models/interface/FieldConfig';
import { Field } from './../../models/interface/Field';
import { FormSelectComponent } from './../components/partials/select/select.component';
import { FormInputComponent } from './../components/partials/input/input.component';
import { FormButtonComponent } from './../components/partials/button/button.component';
import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef, OnChanges, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';



const COMPONENTS = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent
};

// @ts-ignore
@Directive({
  // tslint:disable-next-line
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private ConnServ: ConnService
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!COMPONENTS[this.config.type]) {
      const supportedTypes = Object.keys(COMPONENTS).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    if (this.config.type === 'select' &&
      this.config.endpoint &&
      !this.config.options) {
      this.getOptions(this.config.endpoint)
        .subscribe(
          data => {
            this.config.options = data;
            this.resolveComponent();
          },
          error => {
            console.log(error);
          }
        );
    } else {
      this.resolveComponent();
    }


  }

  resolveComponent() {
    const component = this.resolver.resolveComponentFactory<Field>(COMPONENTS[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

  getOptions(endpoint) {
    return this.ConnServ.getAll<any[]>({ endpoint });
  }
}
