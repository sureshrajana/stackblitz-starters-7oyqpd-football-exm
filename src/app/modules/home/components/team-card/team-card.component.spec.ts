import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardComponent } from './team-card.component';
import { getCountries } from '../../mocks';
import { getTeam } from '../../mocks/team.mock';

describe('TeamCardComponent', () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamCardComponent]
    });
    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    component.countries = getCountries().response;
    component.team = getTeam().response[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not select country', () => {
    component.team = { ...getTeam().response[0]};
    component.team.team.country = 'fakeCountry';
    component.ngOnInit();
    expect(component.countrySelected).toEqual('');
  });
});
