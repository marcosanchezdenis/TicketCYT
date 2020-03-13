import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayScreenComponent } from './containers/display-screen/display-screen.component';
import { HistoryDisplayComponent } from './components/history-display/history-display.component';
import { CurrentTurnDisplayComponent } from './components/current-turn-display/current-turn-display.component';
import { DisplayRoutingModule } from './display-routing.module';



@NgModule({
  declarations: [DisplayScreenComponent, HistoryDisplayComponent, CurrentTurnDisplayComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
