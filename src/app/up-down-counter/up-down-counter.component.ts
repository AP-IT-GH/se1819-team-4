import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {

  getal :number;
  constructor() { }
  
  ngOnInit() {
  }

  countUp(){
    this.getal++;
  }

  countDown(){
    this.getal--;
  }
 
}
