import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomepageComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class MainLayoutModule { }
