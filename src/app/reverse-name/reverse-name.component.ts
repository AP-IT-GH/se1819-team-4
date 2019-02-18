import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reverse-name',
  templateUrl: './reverse-name.component.html',
  styleUrls: ['./reverse-name.component.css']
})
export class ReverseNameComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }


}
@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe()">Click to reverse!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
