import { Observable, of, map, shareReplay } from "rxjs";
import { getStandings } from "../../mocks";
import { StandingLeague } from "../../models/standing.model";

export class StandingsServiceMock {
  getStandingsLeague(): Observable<StandingLeague[]> {
   return of(getStandings())
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
