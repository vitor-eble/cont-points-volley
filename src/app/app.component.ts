import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  pointsTeamRed = 0;
  setsTeamRed = 0;
  pointsTeamBlue = 0;
  setsTeamBlue = 0;
  showWarning: boolean = false;
  winner: 'teamRed' | 'teamBlue' | null = null;

  constructor() {
    this.checkGuidance();
    this.loadGame();
  }

  @HostListener('window:resize')
  checkGuidance() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.showWarning = height > width;
  }

  @HostListener('window:beforeunload', ['$event'])
  resetOnClose(event: Event) {
    if(!navigator.userActivation?.isActive){
      localStorage.removeItem('gameData')
    }
  }

  incrementPoints(team: string) {
    if (team === 'teamRed') {
      this.pointsTeamRed++;
    }
    if (team === 'teamBlue') {
      this.pointsTeamBlue++;
    }
    this.verificationSets();
    this.saveGame();
  }

  backPoint(team: string) {
    if (team === 'teamRed' && this.pointsTeamRed > 0) {
      this.pointsTeamRed--;
    }
    if (team === 'teamBlue' && this.pointsTeamBlue > 0) {
      this.pointsTeamBlue--;
    }
    this.saveGame();
  }

  verificationSets() {
    if (this.pointsTeamRed >= 25 && (this.pointsTeamRed - this.pointsTeamBlue) >= 2) {
      this.setsTeamRed++;
      this.winner = 'teamRed';
      this.resetPoints();
      this.showMessage();
    }
    if (this.pointsTeamBlue >= 25 && (this.pointsTeamBlue - this.pointsTeamRed) >= 2) {
      this.setsTeamBlue++;
      this.winner = 'teamBlue';
      this.resetPoints();
      this.showMessage();
    }
    this.saveGame();
  }

  resetPoints() {
    this.pointsTeamBlue = 0;
    this.pointsTeamRed = 0;
    this.saveGame();
  }

  resetGame() {
    this.pointsTeamRed = 0;
    this.setsTeamRed = 0;
    this.pointsTeamBlue = 0;
    this.setsTeamBlue = 0;
    localStorage.removeItem('gameData'); // 🔹 Limpa o LocalStorage para começar do zero
  }

  fullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  showMessage() {
    setTimeout(() => {
      this.winner = null;
    }, 3000);
  }

  saveGame() {
    const gameData = {
      pointsTeamRed: this.pointsTeamRed,
      setsTeamRed: this.setsTeamRed,
      pointsTeamBlue: this.pointsTeamBlue,
      setsTeamBlue: this.setsTeamBlue
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }

  loadGame() {
    const savedGame = localStorage.getItem('gameData');
    if (savedGame) {
      const gameData = JSON.parse(savedGame);
      this.pointsTeamRed = gameData.pointsTeamRed ?? 0;
      this.setsTeamRed = gameData.setsTeamRed ?? 0;
      this.pointsTeamBlue = gameData.pointsTeamBlue ?? 0;
      this.setsTeamBlue = gameData.setsTeamBlue ?? 0;
    }
  }
}
