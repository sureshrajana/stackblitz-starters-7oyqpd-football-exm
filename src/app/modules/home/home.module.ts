import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { HeaderComponent } from './components/header/header.component';
import { StandingsComponent } from './components/standings/standings.component';
import { TeamResultsComponent } from './pages/team-results/team-results.component';
import {
  CountryServiceModule,
  StandingsServiceModule,
  LeagueServiceModule,
  FixtureServiceModule,
  TeamServiceModule,
  SecureStorageServiceModule } from './services';
import { TeamResultsCardComponent } from './components/team-results-card/team-results-card.component';
import { TeamCardComponent } from './components/team-card/team-card.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HeaderComponent,
    StandingsComponent,
    TeamResultsComponent,
    TeamResultsCardComponent,
    TeamCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CountryServiceModule,
    StandingsServiceModule,
    LeagueServiceModule,
    FixtureServiceModule,
    TeamServiceModule,
    SecureStorageServiceModule
  ],
  providers: [CountryServiceModule, FixtureServiceModule, LeagueServiceModule, StandingsServiceModule, TeamServiceModule, SecureStorageServiceModule]
})
export class HomeModule { }
