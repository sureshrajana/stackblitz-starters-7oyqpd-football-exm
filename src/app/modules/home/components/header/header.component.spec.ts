import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Country } from '../../models';
import { getCountries } from '../../mocks';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select country', () => {
    const spy = spyOn(component.selCountry, 'emit');
    const countryData: Country = getCountries().response[0];
    component.selectCountry(countryData);
    expect(component.selectedCountry).toEqual(countryData.name);
    expect(spy).toHaveBeenCalledWith(countryData);
  });

  it('should selected country', () => {
    const countryData: Country = getCountries().response[0];
    component.selectedCountry = countryData.name;
    expect(component.isSelectedCountry(countryData)).toEqual('header__button--selected');
  });

  it('should not selected country', () => {
    const countryData: Country = getCountries().response[0];
    component.selectedCountry = getCountries().response[1].name;
    expect(component.isSelectedCountry(countryData)).toEqual('');
  });
});
