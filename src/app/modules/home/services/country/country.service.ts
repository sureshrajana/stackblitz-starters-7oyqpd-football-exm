import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { CountryServiceModule } from './country.service.module';
import { COUNTRY_ENABLES } from '../../constants';
import { ApiCountryResponse, Country } from '../../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: CountryServiceModule
})
export class CountryService {

  private countries!: Country[];

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    const url = `${environment.apiUrlPrefix}/countries`;
    const HEADER_OPTIONS = {
      headers: new HttpHeaders({
        'x-apisports-key': environment.apiKey,
      })
    };
    return this.http.get<ApiCountryResponse>(url, HEADER_OPTIONS)
    .pipe(
      map(data => data.response),
      map(countries => countries.filter(country => COUNTRY_ENABLES.includes(country.name))),
      map(countries => this.countries = countries),
      shareReplay()
    );
  }

  getCachedCounties(): Country[] {
    return this.countries;
  }
}

