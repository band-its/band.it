import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SongsComponent } from './songs/songs.component';
import { BandsComponent } from './bands/bands.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomepageComponent,
    SignInComponent,
    SignUpComponent,
    SongsComponent,
    BandsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class MainLayoutModule { }
