import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SingUpComponentComponent } from './sing-up-component/sing-up-component.component';

@NgModule({
  declarations: [
    SingUpComponentComponent
  ],

  imports: [
    CommonModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
