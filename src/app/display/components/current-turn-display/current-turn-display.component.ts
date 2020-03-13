import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/services/turn.service';

@Component({
  selector: 'app-current-turn-display',
  templateUrl: './current-turn-display.component.html',
  styleUrls: ['./current-turn-display.component.scss']
})
export class CurrentTurnDisplayComponent implements OnInit {

  constructor(private turn:TurnService) { }


  observer = this.turn.getObserver();
  turns;
  top = {code:"asd", date:new Date() }; 


  ngOnInit() {

    this.observer.subscribe(data => {
      this.turns = data;
      //this.showFirstTurn(data);
      this.top = data[0];
      


    })

    this.turn.getToAttend()
  }

  showFirstTurn(data){
    console.log(data, data.length, 0);
    if(data.lenght > 0){
      alert("----");
      this.top = data[0];

    }
  }

}
