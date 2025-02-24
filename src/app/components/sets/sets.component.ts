import { Component } from '@angular/core';

import { CounterSetsService } from '../../services/counter-sets.service';

@Component({
  selector: 'app-sets',
  standalone: false,
  templateUrl: './sets.component.html',
  styleUrl: './sets.component.css'
})
export class SetsComponent {

  constructor(private counterSetsService: CounterSetsService) { }

  get setsTeamRed() {
    return this.counterSetsService.getSets('teamRed');
  }

  get setsTeamBlue() {
    return this.counterSetsService.getSets('teamBlue');
  }

}
