import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/services/turn.service';

@Component({
  selector: 'app-history-display',
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.scss']
})
export class HistoryDisplayComponent implements OnInit {

  constructor(private turn:TurnService) { }

  observer =  this.turn.getObserver();
  turns;


  ngOnInit() {
    this.observer.subscribe(data =>{
      console.log(data);
      this.turns = data;
    })

    this.turn.getAttended()
  }

}
