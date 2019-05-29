import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { NavComponent } from './layout/nav/nav.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'bands', loadChildren: './layout/bands/bands.module#BandsModule' },
  { path: 'songs', loadChildren: './layout/songs/songs.module#SongsModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
