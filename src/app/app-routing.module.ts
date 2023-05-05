import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import(
        './layers/containers/dynamic-profile/dynamic-profile.component'
      ).then((m) => m.DunamicProfileComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
