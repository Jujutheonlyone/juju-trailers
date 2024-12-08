import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailerSinglePage } from './trailer-single.page';

const routes: Routes = [
  {
    path: '',
    component: TrailerSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailerSinglePageRoutingModule {}
