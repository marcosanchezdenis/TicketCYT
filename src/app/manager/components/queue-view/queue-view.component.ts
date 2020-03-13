import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/services/turn.service';

@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
  styleUrls: ['./queue-view.component.scss']
})
export class QueueViewComponent implements OnInit {

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
