import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reverse-name',
  templateUrl: './reverse-name.component.html',
  styleUrls: ['./reverse-name.component.css']
})
export class ReverseNameComponent implements OnInit {
  

  constructor() { 
    var tobereversed = "";
  }

  ngOnInit() {
  }

  clickMessage = '';
  

  onClickMe() {
    var txt= ((document.getElementById("write") as HTMLInputElement).value);
    var lol = this.reversestring(txt);
    console.log(lol);
    this.clickMessage = 'You are my hero!';
    document.getElementById("text").textContent = lol;
  }

  reversestring(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }


}
@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe()">Click to reverse!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  
}
