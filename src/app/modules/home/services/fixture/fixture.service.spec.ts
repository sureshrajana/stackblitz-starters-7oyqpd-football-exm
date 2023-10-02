import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { FixtureService } from './fixture.service';
import { API_URL_PREFIX } from '../../constants';
import { getFixture } from '../../mocks';

describe('FixtureService', () => {
  let service: FixtureService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FixtureService ]
    });
    service = TestBed.inject(FixtureService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get fixture by team', fakeAsync(() => {
    const leagueId = 39;
    const teamId = 50;
    const year =  '2023';
    service.getFixtureTeam(leagueId, teamId, year).subscribe(fixture => {
      tick();
      expect(fixture.length > 0).toBeTruthy();
    });
    const url = `${API_URL_PREFIX}/fixtures?league=${leagueId}&season=${year}&team=${teamId}&last=10`
    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url,
    });

    request.flush(getFixture());
  }));
});
