import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cont-points-volley';

  pointsTeamRed = 0;
  setsTeamRed = 0;
  pointsTeamBlue = 0;
  setsTeamBlue = 0;

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
