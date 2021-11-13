import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
