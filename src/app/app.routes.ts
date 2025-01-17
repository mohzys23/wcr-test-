import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';


export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Default redirect

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth', loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule)
      },
      { path: 'auth', loadChildren: () => import("./signup/signup.module").then((m) => m.SignupModule) },
    ],
  }
];
