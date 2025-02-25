import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { FullscreenService } from '../../services/fullscreen.service';
import { CounterSetsService } from '../../services/counter-sets.service';
import { CounterPointsService } from '../../services/counter-points.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  animations: [
    trigger('rotateArrow',[
      state('close', style({ transform: 'rotate(0deg)' })),
      state('open', style({ transform: 'rotate(180deg)' })),
      transition('closed <=> open', animate('300ms ease-in')),
    ])
  ]
})
export class MenuComponent {

  showMenu: boolean = false;
  isFullScreen: boolean = false;

  constructor(
    private fullscreenService: FullscreenService,
    private counterSetsService: CounterSetsService,
    private counterPointsService: CounterPointsService,
  ) { }

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  toggleFullscreen(){
    this.fullscreenService.toggleFullscreen();
    this.isFullScreen = this.fullscreenService.isFullscreen
  }

  backPoint(){
    this.counterPointsService.backPoint()
  }

  resetGame(){
    this.counterPointsService.resetPoints();
    this.counterSetsService.resetSets();
  }

}
