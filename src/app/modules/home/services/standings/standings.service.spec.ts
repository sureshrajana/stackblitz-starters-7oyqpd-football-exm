import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { StandingsService } from './standings.service';
import { getStandings } from '../../mocks';
import { API_URL_PREFIX } from '../../constants';

describe('StandingsService', () => {
  let service: StandingsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ StandingsService ]
    });
    service = TestBed.inject(StandingsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get standings', fakeAsync(() => {
    const leagueId = '39';
    const year =  '2023';
    service.getStandingsLeague(leagueId, year).subscribe(standings => {
      tick();
      expect(standings.length > 0).toBeTruthy();
    });
    const url = `${API_URL_PREFIX}/standings?league=${leagueId}&season=${year}`
    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url,
    });

    request.flush(getStandings());
  }));
});
