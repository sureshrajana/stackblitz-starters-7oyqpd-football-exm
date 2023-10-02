import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeContainerComponent } from './home-container.component';
import { ActivatedRoute } from '@angular/router';
import { CountryService, LeagueService, SecureStorageService, StandingsService } from '../../services';
import { CountryServiceMock } from '../../services/country/country.service.mocks';
import { LeagueServiceMock } from '../../services/league/league.service.mocks';
import { StandingsServiceMock } from '../../services/standings/standings.service.mocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRouteMock, getCountries } from '../../mocks';
import { Country } from '../../models';
import { SecureStorageServiceMock } from '../../services/secure-storage/secure-storage.service.mocks';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContainerComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock,
        },
        {
          provide: CountryService,
          useClass: CountryServiceMock,
        },
        {
          provide: LeagueService,
          useClass: LeagueServiceMock,
        },
        {
          provide: StandingsService,
          useClass: StandingsServiceMock,
        },
        {
          provide: SecureStorageService,
          useClass: SecureStorageServiceMock,
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select country', fakeAsync(() => {
    const countryData: Country = getCountries().response[47];
    component.countrySelected = countryData.name;
    component.onSelectCountry(countryData);
    tick();
    expect(component.countrySelected).toEqual(countryData.name);
  }));
});
