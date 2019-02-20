import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-stories-gursel',
  templateUrl: './stories-gursel.component.html',
  styleUrls: ['./stories-gursel.component.css']
})
export class StoriesGurselComponent implements OnInit {

  ccc : string
  deffontsize : string
  cbc : number
  
  constructor() {
    this.cbc = 16;
   }

  element : HTMLElement
  ngOnInit() {
    

  }

   getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //var c = document.getElementById("colorpad");
    document.getElementById("tekst").style.color = color;
  
    return color;
  } 

  sizeminus(){


    this.cbc--;
    document.getElementById("tekst").style.fontSize = this.cbc +'px';

    // var nummer = Math.floor(Math.random() * 30) + 4 

    // var num = '30px';
    // var str = 'px'
    // num = num[Math.floor(Math.random() * 20)]
    // num = num+str;

  }
  sizeplus(){
    this.cbc++;
    document.getElementById("tekst").style.fontSize = this.cbc +'px';
  }

}




