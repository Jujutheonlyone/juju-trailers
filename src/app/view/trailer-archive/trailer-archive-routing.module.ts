import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailerArchivePage } from './trailer-archive.page';

const routes: Routes = [
  {
    path: '',
    component: TrailerArchivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailerArchivePageRoutingModule {}
