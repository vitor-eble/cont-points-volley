import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: false,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  interval: any;
  running: boolean = false;

  startPauseTimer(){
    if(this.running){
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.incrementTimer();
      }, 1000);
    }
    this.running = !this.running;
  }

  private incrementTimer(){
    this.seconds++;
    if(this.seconds === 60){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes == 60){
      this.minutes = 0;
      this.hours++;
    }
  }

  resetTime(){
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    clearInterval(this.interval);
    this.running = false;
  }

  formatTime(value: number): string{
    return value < 10 ? `0${value}` : `${value}`;
  }
}
