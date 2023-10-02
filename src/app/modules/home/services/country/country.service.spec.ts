import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { CountryService } from './country.service';
import { API_URL_PREFIX } from '../../constants';
import { getCountries } from '../../mocks';

describe('CountryService', () => {
  let service: CountryService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ CountryService ]
    });
    service = TestBed.inject(CountryService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get countries', fakeAsync(() => {
    service.getCountries().subscribe(countries => {
      tick();
      expect(countries.length > 0).toBeTruthy();
    });
    const url = `${API_URL_PREFIX}/countries`
    const request: TestRequest = controller.expectOne({
      method: 'GET',
      url,
    });

    request.flush(getCountries());
  }));

  it('should get cached countries', () => {
    service['countries'] = getCountries().response;
    expect(service.getCachedCounties()).toBeDefined();
  });
});
