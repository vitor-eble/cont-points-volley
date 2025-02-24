import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  enterFullScreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen ){
      elem.requestFullscreen();
    }
  }

  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  constructor() { }
}
