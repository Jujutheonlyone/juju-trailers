import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trailers',
        loadChildren: () => import('../view/trailer-archive/trailer-archive.module').then(m => m.TrailerArchivePageModule)
      },
      {
        path: 'bookings',
        loadChildren: () => import('../view/bookings/bookings.module').then(m => m.BookingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../view/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/trailers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trailers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
