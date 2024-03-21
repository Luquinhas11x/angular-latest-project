import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { PizzaFilterComponent } from './feature/pizza-filter/pizza-filter.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pizza',
    component: PizzaFilterComponent
  },
  {
    path: 'detail/:id',
    loadComponent: () => import("../demo-challenge/feature/challenge-detail/challenge-detail.component").then(m => m.ChallengeDetailComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoChallengeRoutingModule { }
