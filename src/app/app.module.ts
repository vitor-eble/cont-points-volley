import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { SetsComponent } from './components/sets/sets.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterPointsService } from './services/counter-points.service';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    SetsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    CounterPointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
