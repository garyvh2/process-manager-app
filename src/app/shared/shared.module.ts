import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { CustomRenderComponent } from './components/utils/CustomRender';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    CustomRenderComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomRenderComponent
  ],
  providers: []
})
export class SharedModule { }
