import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandsRoutingModule } from './bands-routing.module';
import { BandsComponentComponent } from './bands-component/bands-component.component';

@NgModule({
  declarations: [
    BandsComponentComponent
  ],

  imports: [
    CommonModule,
    BandsRoutingModule
  ]
})
export class BandsModule { }
