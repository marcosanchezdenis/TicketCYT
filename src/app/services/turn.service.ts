import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnService {
 

  subject =  new Subject<any>();

  data = [];

  attending() {
   this.data.shift()
  }

  getToAttend() {
    this.subject.next(this.data);
    //throw new Error("Method not implemented.");
  }
  getAttended() {
    this.subject.next(this.data);
    //throw new Error("Method not implemented.");
  }
  getObserver() {
    return this.subject.asObservable();
    throw new Error("Method not implemented.");

  }
  registerTurn(identification) {
    this.data.push(
      {
        code: identification.matricula,
        date: new Date(),
       }
    )
    
    //throw new Error("Method not implemented.");
  }

  constructor() { }
}
