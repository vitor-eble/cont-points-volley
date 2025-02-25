import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterPointsService {

  private pointsTeamRed = 0;
  private pointsTeamBlue = 0;
  private lastPoint: 'teamRed' | 'teamBlue' | null = null;

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
    this.lastPoint = team;
  }

  backPoint() {
    if(this.lastPoint === 'teamRed') {
      this.pointsTeamRed--;
    }
    if(this.lastPoint === 'teamBlue') {
      this.pointsTeamBlue--;
    }
    this.lastPoint = null;
  }

  resetPoints() {
    this.pointsTeamRed = 0;
    this.pointsTeamBlue = 0;
  }
}
