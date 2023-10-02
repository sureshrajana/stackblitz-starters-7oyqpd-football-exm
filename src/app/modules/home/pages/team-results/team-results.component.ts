import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, shareReplay, takeUntil, zip } from 'rxjs';
import { FixtureService, SecureStorageService, TeamService } from '../../services';
import { Fixture } from '../../models/fixture.model';
import { Country, TeamData } from '../../models';
import { COUNTRY_KEY } from '../../constants';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.scss']
})
export class TeamResultsComponent implements OnInit, OnDestroy {

  public leagueId!: number;
  public teamId!: number;
  public currentYear!: string;
  public fixtures!: Fixture[];
  public team!: TeamData;
  public countries!: Country[];

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private routeActive: ActivatedRoute,
    private router: Router,
    private fixtureService: FixtureService,
    private teamService: TeamService,
    private secureStorageService: SecureStorageService
  ) {}

  ngOnInit(): void {
    this.routeActive.params.subscribe(params => {
      this.leagueId = params['leagueId'];
      this.teamId = params['teamId'];
      this.currentYear = params['currentYear'];
      this.loadFixtures();
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  goToHome(): void {
    this.router.navigate(
      ['/home'], 
      { queryParams: { leagueId: this.leagueId, currentYear: this.currentYear} }
    );
  }

  private loadFixtures(): void {
    zip(
      this.fixtureService.getFixtureTeam(this.leagueId, this.teamId, this.currentYear),
      this.teamService.getTeam(this.teamId)
    )
    .pipe(
      takeUntil(this.ngUnsubscribe),
      shareReplay()
    ).subscribe(([fixtures, team]) => {
      this.fixtures = fixtures;
      this.team = team[0];
      this.countries = JSON.parse(this.secureStorageService.getData(COUNTRY_KEY));
    });
  }

}

