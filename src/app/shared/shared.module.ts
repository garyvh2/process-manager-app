import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CustomRenderComponent } from './components/utils/CustomRender';

const SHARED_MODULES = [
  HeaderComponent,
  FooterComponent,
  CustomRenderComponent
]

@NgModule({
  imports: [
    CommonModule
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
  providers: []
})
export class SharedModule { }
