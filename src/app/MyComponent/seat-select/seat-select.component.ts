import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Seat } from '../Seat';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  

   msg:string = ""

   type= new FormControl();
   num= new FormControl();
  constructor() {
  
   }

  ngOnInit(): void {
    // console.log(this.)
  
  }

  disp(){
      this.msg = "Hi Master Asif!!"  
      console.log(this.type.value)
  }

}
