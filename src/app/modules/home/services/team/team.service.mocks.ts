import { Observable, of, map, shareReplay } from "rxjs";
import { getTeam } from "../../mocks/team.mock";
import { TeamData } from "../../models";

export class TeamServiceMock {
  getTeam(): Observable<TeamData[]> {
   return of(getTeam())
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
