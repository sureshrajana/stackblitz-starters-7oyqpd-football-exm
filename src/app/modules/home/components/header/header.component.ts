import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Input() countries: Country[] = [];
  @Input() selectedCountry!: string;
  @Output() selCountry = new EventEmitter<Country>();
  

  selectCountry(country: Country): void {
    this.selectedCountry = country.name;
    this.selCountry.emit(country);
  }

  isSelectedCountry(country: Country): string  {
    return country.name === this.selectedCountry ? 'header__button--selected' : ''; 
  }
}
