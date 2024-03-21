import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  {
    path: 'demo/challenge',
    component: LayoutComponent,
    loadChildren: () => import('./modules/demo-challenge/demo-challenge.module').then(m => m.DemoChallengeModule)
  },
  {
    path: '',
    redirectTo: 'demo/challenge',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
