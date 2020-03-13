import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/services/turn.service';

@Component({
  selector: 'app-queue-options',
  templateUrl: './queue-options.component.html',
  styleUrls: ['./queue-options.component.scss']
})
export class QueueOptionsComponent implements OnInit {

  constructor(private turn:TurnService) { }

  ngOnInit() {
  }


  setAttended(){
      this.turn.attending()
  }

}
