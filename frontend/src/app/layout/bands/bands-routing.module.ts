import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandsComponentComponent } from './bands-component/bands-component.component';

const routes: Routes = [
  { path: '', component: BandsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandsRoutingModule { }
