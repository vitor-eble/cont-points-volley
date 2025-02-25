import { Component, HostListener } from '@angular/core';

import { CounterSetsService } from './services/counter-sets.service';
import { CounterPointsService } from './services/counter-points.service';
import { EditNameService } from './services/edit-name.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  showWarning: boolean = false;
  winner: 'teamRed' | 'teamBlue' | null = null;

  nameTeamRed = 'Team Red';
  editName: boolean = false;
  editNameTeam01: boolean = false;
  editNameTeam02: boolean = false;

  constructor(
    private counterSetsService: CounterSetsService,
    private counterPointsService: CounterPointsService,
    private editNameService: EditNameService
  ) {
    this.checkGuidance();
  }

  get showEditName() {
    return this.editNameService.editNameTeam01 || this.editNameService.editNameTeam02;
  }

  get pointsTeamRed() {
    return this.counterPointsService.getPoints('teamRed');
  }

  get pointsTeamBlue() {
    return this.counterPointsService.getPoints('teamBlue');
  }

  incrementPoints(team: 'teamRed' | 'teamBlue') {
    this.counterPointsService.addPoint(team);
    this.verificationSets();
  }

  verificationSets() {
    if (this.pointsTeamRed >= 25 && (this.pointsTeamRed - this.pointsTeamBlue) >= 2) {
      this.counterSetsService.addSet('teamRed');
      this.winner = 'teamRed';
      this.showMessage();
      this.resetPoints();
    }
    if (this.pointsTeamBlue >= 25 && (this.pointsTeamBlue - this.pointsTeamRed) >= 2) {
      this.counterSetsService.addSet('teamBlue');
      this.winner = 'teamBlue';
      this.showMessage();
      this.resetPoints()
    }
  }

  resetPoints() {
    this.counterPointsService.resetPoints();
  }

  showMessage() {
    setTimeout(() => {
      this.winner = null;
    }, 3000);
  }

  @HostListener('window:resize')
  checkGuidance() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.showWarning = height > width;
  }

  openEditName(team: 'team01' | 'team02') {
    this.editNameService.showEditName(team);

  }
}
