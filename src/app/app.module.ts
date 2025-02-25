import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { SetsComponent } from './components/sets/sets.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterPointsService } from './services/counter-points.service';
import { FormsModule } from '@angular/forms';
import { EditNameService } from './services/edit-name.service';
import { EditNameComponent } from './components/edit-name/edit-name.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    SetsComponent,
    MenuComponent,
    EditNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CounterPointsService,
    EditNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
