import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./authApp/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./authApp/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./quizDashboard/dashbaord/dashbaord.component').then(c => c.DashbaordComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
