import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsComponent } from './team-results.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FixtureService, SecureStorageService, TeamService } from '../../services';
import { FixtureServiceMock } from '../../services/fixture/fixture.service.mocks';
import { ActivatedRouteMock } from '../../mocks';
import { TeamServiceMock } from '../../services/team/team.service.mocks';
import { SecureStorageServiceMock } from '../../services/secure-storage/secure-storage.service.mocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TeamResultsComponent', () => {
  let component: TeamResultsComponent;
  let fixture: ComponentFixture<TeamResultsComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamResultsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock,
        },
        {
          provide: FixtureService,
          useClass: FixtureServiceMock,
        },
        {
          provide: TeamService,
          useClass: TeamServiceMock,
        },
        {
          provide: SecureStorageService,
          useClass: SecureStorageServiceMock,
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(TeamResultsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should back to home', () => {
    const spy = spyOn(router, 'navigate');
    component.goToHome();
    expect(spy).toHaveBeenCalledWith(
      ['/home'], 
      { queryParams: { leagueId: '39', currentYear: '2023'} }
    );
  });
  
});
