import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterSetsService {

  private setsTeamRed = 0;
  private setsTeamBlue = 0;

  constructor() { }

  getSets(team: 'teamRed' | 'teamBlue'): number {
    return team === 'teamRed' ? this.setsTeamRed : this.setsTeamBlue;
  }

  addSet(team: 'teamRed' | 'teamBlue') {
    if (team === 'teamRed') {
      this.setsTeamRed++;
    }
    if (team === 'teamBlue') {
      this.setsTeamBlue++;
    }
  }

  resetSets() {
    this.setsTeamRed = 0;
    this.setsTeamBlue = 0;
  }

}
