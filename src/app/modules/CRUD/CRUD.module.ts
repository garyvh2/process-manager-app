import { Ng2SmartTableModule } from 'ng2-smart-table';
import { QuestionComponent } from './pages/Question/question.component';
import { CRUDService } from './CRUD.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormModule } from '../../shared/components/dynamic-form/dynamic-form.module';
import { CRUDRouterModule } from './CRUD.router';
import { UsersComponent } from './pages/Users/users.component';
import { UsersTypesComponent } from './pages/UsersType/userstype.component';


@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    Ng2SmartTableModule,
    CRUDRouterModule
  ],
  declarations: [
    UsersComponent,
    UsersTypesComponent,
    QuestionComponent
  ],
  exports: [
    UsersComponent,
    UsersTypesComponent,
    QuestionComponent
  ],
  providers: [
    CRUDService
  ]
})
export class CRUDModule { }
