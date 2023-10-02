import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent, TeamResultsComponent } from './pages';

const routes: Routes = [
      {
        path: 'team/:leagueId/:teamId/:currentYear',
        component: TeamResultsComponent
      },
      {
        path: 'home/:leagueId',
        component: HomeContainerComponent
      },
      {
        path: '',
        component: HomeContainerComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }