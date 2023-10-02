import { Component, Input } from '@angular/core';
import { Standing } from '../../models/standing.model';
import { Country } from '../../models';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {

  @Input() currentYear!: string;
  @Input() leagueId!: string;
  @Input() country!: Country;
  @Input() standings: Standing[]= [];

  trackByItem(index: number, item: Standing): number {
    return item.rank;
  }
}
