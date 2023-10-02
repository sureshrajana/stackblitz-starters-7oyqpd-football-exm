import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultsCardComponent } from './team-results-card.component';
import { getFixture } from '../../mocks';

describe('TeamResultsCardComponent', () => {
  let component: TeamResultsCardComponent;
  let fixture: ComponentFixture<TeamResultsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamResultsCardComponent]
    });
    fixture = TestBed.createComponent(TeamResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trackByItems should return id', () => {
    const fixtureFake = getFixture().response[0];
    expect(component.trackByItem(0, fixtureFake)).toEqual(48);
  });
});
