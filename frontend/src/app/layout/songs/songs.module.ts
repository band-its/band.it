import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponentComponent } from './songs-component/songs-component.component';

@NgModule({
  declarations: [
    SongsComponentComponent
  ],

  imports: [
    CommonModule,
    SongsRoutingModule
  ]
})
export class SongsModule { }
