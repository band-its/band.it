import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';

@NgModule({
  declarations: [
    SignInComponentComponent
  ],

  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
