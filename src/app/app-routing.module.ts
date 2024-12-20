import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./view/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registrieren',
    loadChildren: () => import('./view/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./view/start/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'confirm-signup',
    loadChildren: () => import('./view/confirm-signup/confirm-signup/confirm-signup.module').then( m => m.ConfirmSignupPageModule)
  },
  {
    path: 'reset-pw',
    loadChildren: () => import('./view/reset-pw/reset-pw/reset-pw.module').then( m => m.ResetPwPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
