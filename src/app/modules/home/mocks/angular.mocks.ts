import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ActivatedRouteMock {
  public params = new Observable((observer) => {
    const urlParams = {
      leagueId: '39',
      teamId: '50',
      currentYear: '2023'
    };
    observer.next(urlParams);
    observer.complete();
  });

  public queryParams = new Observable((observer) => {
    const urlParams = {
      leagueId: '39',
      teamId: '50',
      currentYear: '2023'
    };
    observer.next(urlParams);
    observer.complete();
  });
}
