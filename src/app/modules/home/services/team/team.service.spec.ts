import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TeamService } from './team.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { getTeam } from '../../mocks/team.mock';

describe('TeamService', () => {
  let service: TeamService;
  let controller: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ TeamService ]
    });
    service = TestBed.inject(TeamService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get standings', fakeAsync(() => {
    const teamId = 39;
    service.getTeam(teamId).subscribe(standings => {
      tick();
      expect(standings.length > 0).toBeTruthy();
    });
    const url = `${environment.apiUrlPrefix}/teams?id=${teamId}`;
    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url,
    });

    request.flush(getTeam());
  }));
});
