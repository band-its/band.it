import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { SignInComponent } from './layout/sign-in/sign-in.component';
import { BandsComponent } from './layout/bands/bands.component';
import { SongsComponent } from './layout/songs/songs.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'bands', component: BandsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'signIn', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
