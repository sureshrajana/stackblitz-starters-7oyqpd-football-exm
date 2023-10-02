import { Injectable } from '@angular/core';
import { TeamServiceModule } from './team.service.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { TeamData, ApiTeamResponse } from '../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: TeamServiceModule
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(teamId: number): Observable<TeamData[]> {
    const url = `${environment.apiUrlPrefix}/teams?id=${teamId}`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': environment.apiKey,
      })
    };
    return this.http.get<ApiTeamResponse>(url, HEADER_OPTIONS)
    .pipe(
      map(data => data.response),
      shareReplay()
    );
  }
}
