import { Observable, of, map, shareReplay } from "rxjs";
import { Fixture } from "../../models";
import { getFixture } from "../../mocks";

export class FixtureServiceMock {
  getFixtureTeam(): Observable<Fixture[]> {
   return of(getFixture())
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
