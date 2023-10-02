import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsComponent } from './standings.component';
import { getStandings } from '../../mocks';

describe('StandingsComponent', () => {
  let component: StandingsComponent;
  let fixture: ComponentFixture<StandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingsComponent]
    });
    fixture = TestBed.createComponent(StandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trackByItems should return id', () => {
    const standingFake = getStandings().response[0].league.standings[0][0];
    expect(component.trackByItem(0, standingFake)).toEqual(1);
  });
});
