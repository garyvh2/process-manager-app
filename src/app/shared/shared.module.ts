import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CustomRenderComponent } from './components/utils/CustomRender';
import { ConnService } from './providers/database.service';
import { TooltipModule } from 'ng2-tooltip-directive';

const SHARED_MODULES = [
  HeaderComponent,
  FooterComponent,
  CustomRenderComponent
];

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
    ReactiveFormsModule,
    DynamicFormModule
  ],
  entryComponents: [
    CustomRenderComponent
  ],
  declarations: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ],
  providers: [
    ConnService
  ]
})
export class SharedModule { }
