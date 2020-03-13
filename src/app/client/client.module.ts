import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRegisterComponent } from './containers/client-register/client-register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';


@NgModule({
  declarations: [ClientRegisterComponent, RegisterFormComponent, RequestFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
