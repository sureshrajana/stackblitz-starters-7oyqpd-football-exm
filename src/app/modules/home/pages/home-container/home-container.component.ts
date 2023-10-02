import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryService, LeagueService, SecureStorageService, StandingsService } from '../../services';
import { Subject, concatMap, shareReplay, takeUntil } from 'rxjs';
import { LEAGUES_IDS } from '../../constants/league.constant';

import { SimpleLeague } from '../../models/league.model';
import { ActivatedRoute } from '@angular/router';
import { Standing } from '../../models/standing.model';
import { COUNTRY_KEY } from '../../constants';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  
  public countries: Country[] = [];
  public countrySelected!: string;
  public country!: Country;
  public standings!: Standing[];
  public league!: SimpleLeague;
  public leagueId!: string;
  public currentYear!: string;
  public showStandings = false;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private standingsService: StandingsService,
    private leagueService: LeagueService,
    private secureStorageService: SecureStorageService
  ) {}
  
  ngOnInit(): void {
    this.showStandings = false;
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.leagueId = params['leagueId'];
        this.currentYear = params['currentYear'];
        if(this.leagueId && this.currentYear) {
          this.loadLeague();
        }
      }
    );
    this.getInfoData();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSelectCountry(country: Country): void {
    this.leagueId = this.getLeagueId(country.name);
    this.countrySelected = country.name;
    this.country = country;
    this.loadLeague();
  }

  private loadLeague(): void {
    this.leagueService.getLeague(this.leagueId)
    .pipe(
      concatMap((leagueInfo) => {
        this.currentYear = `${leagueInfo[0].seasons[0].year}`;
        return this.standingsService.getStandingsLeague(this.leagueId, this.currentYear)
      }),
      shareReplay(),
      takeUntil(this.ngUnsubscribe)
    ).subscribe(standings => {
      const league = standings[0].league;
      this.countrySelected = league.country
      this.standings = league.standings[0];
      this.showStandings = true;
    })
  }

  private getInfoData(): void {
    this.countryService.getCountries()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((countries) => {
      this.secureStorageService.saveData(COUNTRY_KEY, JSON.stringify(countries));
      this.countries = countries;
    })
  }
    
  private getLeagueId(countryName: string): string {
    const selectedLeagues = LEAGUES_IDS.filter(league => league.name === countryName);
    const leagueId = selectedLeagues[0].id;
    return `${leagueId}`;
  }
}
