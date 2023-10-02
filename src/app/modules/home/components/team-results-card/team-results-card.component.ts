import { Component, Input } from '@angular/core';
import { Fixture } from '../../models';

@Component({
  selector: 'app-team-results-card',
  templateUrl: './team-results-card.component.html',
  styleUrls: ['./team-results-card.component.scss']
})
export class TeamResultsCardComponent {

  @Input() public fixtures!: Fixture[];

  trackByItem(index: number, item: Fixture): number {
    return item.teams.home.id + index;
  }


}
