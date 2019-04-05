import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layout/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'bands', loadChildren: './layout/bands/bands.module#BandsModule' },
  { path: 'songs', loadChildren: './layout/songs/songs.module#SongsModule' },
  { path: 'signIn', loadChildren: './layout/signIn/sign-in.module#SignInModule' },
  { path: 'signUp', loadChildren: './layout/signUp/sign-up.module#SignUpModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
