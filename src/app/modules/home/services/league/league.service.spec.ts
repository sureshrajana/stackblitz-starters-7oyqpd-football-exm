import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { LeagueService } from './league.service';
import { API_URL_PREFIX } from '../../constants';
import { getLeague } from '../../mocks';

describe('LeagueService', () => {
  let service: LeagueService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ LeagueService ]
    });
    service = TestBed.inject(LeagueService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get league', fakeAsync(() => {
    const leagueId = '39';
    service.getLeague(leagueId).subscribe(league => {
      tick();
      expect(league.length > 0).toBeTruthy();
    });
    const url = `${API_URL_PREFIX}/leagues?id=${leagueId}&current=true`
    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url,
    });

    request.flush(getLeague());
  }));
});
