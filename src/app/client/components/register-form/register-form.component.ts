import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TurnService } from 'src/app/services/turn.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private turn:TurnService) { }
  @Output() data = new EventEmitter<any>();


  form = new FormGroup({
    matricula : new FormControl('',Validators.required)
  })


  
  formSubmit(){

    if(!this.form.invalid){
      
      this.turn.registerTurn(this.form.value)
    }else{
      
    }
  
  }
  ngOnInit() {

  }

}
