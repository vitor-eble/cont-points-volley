import { Component, HostListener } from '@angular/core';

import { CounterSetsService } from './services/counter-sets.service';
import { CounterPointsService } from './services/counter-points.service';
import { FullscreenService } from './services/fullscreen.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  showWarning: boolean = false;
  winner: 'teamRed' | 'teamBlue' | null = null;

  constructor(
    private counterSetsService: CounterSetsService,
    private counterPointsService: CounterPointsService,
    private fullscreenService: FullscreenService
  ) {
    this.checkGuidance();
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
      this.resetPoints
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

  @HostListener('window:resize',['$event'])
  onResize() {
    this.checkOrientation();
  }

  checkGuidance() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.showWarning = height > width;
  }

  @HostListener('window:orientationchange', ['$event'])


  onOrientationChange() {
    this.checkOrientation();
  }

  checkOrientation() {
    if(window.innerWidth> window.innerHeight) {
      this.fullscreenService.enterFullScreen();
    }
  }
}
