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

  showWarning: boolean = false

  constructor(){
    this.checkGuidance()
  }

  @HostListener('window:resize')
  checkGuidance(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.showWarning = height > width
  }

  contPoints(team: string){
    console.log('botao clicado');
    console.log(team);

    if(team === 'teamBlue'){
      this.pointsTeamBlue++
    }
    if(team === 'teamRed'){
      this.pointsTeamRed++
    }

  }

}
