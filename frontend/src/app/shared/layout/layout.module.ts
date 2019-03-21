import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
