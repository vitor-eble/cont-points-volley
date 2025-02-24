import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterPointsService {

  private pointsTeamRed = 0;
  private pointsTeamBlue = 0;

  constructor() { }

  getPoints(team: 'teamRed' | 'teamBlue'): number {
    return team === 'teamRed' ? this.pointsTeamRed : this.pointsTeamBlue;
  }

  addPoint(team: 'teamRed' | 'teamBlue') {
    if (team === 'teamRed') {
      this.pointsTeamRed++;
    }
    if (team === 'teamBlue') {
      this.pointsTeamBlue++;
    }
  }

  resetPoints() {
    this.pointsTeamRed = 0;
    this.pointsTeamBlue = 0;
  }
}
