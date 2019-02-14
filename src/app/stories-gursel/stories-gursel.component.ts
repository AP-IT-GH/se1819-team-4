import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-stories-gursel',
  templateUrl: './stories-gursel.component.html',
  styleUrls: ['./stories-gursel.component.css']
})
export class StoriesGurselComponent implements OnInit {

  constructor() { }

  element : HTMLElement
  ngOnInit() {
  }

  

}

function setRandomColor() {

 // HTMLElement el = document.getElementById('content');

  //$("#colorpad").css("background-color", getRandomColor());
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

