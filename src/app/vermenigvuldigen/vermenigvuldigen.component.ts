import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-vermenigvuldigen',
  templateUrl: './vermenigvuldigen.component.html',
  styleUrls: ['./vermenigvuldigen.component.css']
})
export class VermenigvuldigenComponent implements OnInit {


  random : number = 0;
  constructor() { 

  }

  ngOnInit() {
  }

  getRandomGetal=() => {this.random = _.random(1,10);}
}
