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

  @HostListener('window:resize') // escuta a mudança do tamanho de tela
  checkGuidance(){
    const width = window.innerWidth; // pega a largura total do dispositivo
    const height = window.innerHeight; // pega a altura total do dispositivo
    this.showWarning = height > width // caso a altura seja maior que a largura, o ShowWarning fica true e o aviso sera mostrado
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

  fullScreen(){
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

}
