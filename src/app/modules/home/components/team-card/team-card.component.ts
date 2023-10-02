import { Component, Input, OnInit } from '@angular/core';
import { Country, TeamData } from '../../models';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() public team!: TeamData;
  @Input() public countries!: Country[];

  public countrySelected!: string;

  ngOnInit(): void { 
    const countrySelected = this.countries.filter(country => country.name === this.team.team.country);
    this.countrySelected = (countrySelected && countrySelected.length > 0) ? countrySelected[0].flag : '';
  }

}
