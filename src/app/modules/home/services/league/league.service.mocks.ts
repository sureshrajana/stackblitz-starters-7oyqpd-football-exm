import { Observable, of, map, shareReplay } from "rxjs";
import { LeagueInfo } from "../../models";
import { getLeague } from "../../mocks";

export class LeagueServiceMock {
  getLeague(): Observable<LeagueInfo[]> {
    return of(getLeague())
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
