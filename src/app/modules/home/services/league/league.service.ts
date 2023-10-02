import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { LeagueServiceModule } from './league.service.module';
import { ApiLeagueResponse, LeagueInfo } from '../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: LeagueServiceModule
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  getLeague(leagueId: string): Observable<LeagueInfo[]> {
    const url = `${environment.apiUrlPrefix}/leagues?id=${leagueId}&current=true`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': environment.apiKey,
      })
    };
    
    return this.http.get<ApiLeagueResponse>(url, HEADER_OPTIONS)
    .pipe(
      map(data => data.response),
      shareReplay()
      );
  }
}

