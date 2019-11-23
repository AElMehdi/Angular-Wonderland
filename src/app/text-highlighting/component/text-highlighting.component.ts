import { Component, OnInit, ViewChild } from '@angular/core';
import { TextSelectEvent } from '../directive/text-selection.directive';

@Component({
  selector: 'app-text-highlighting',
  templateUrl: './text-highlighting.component.html',
  styleUrls: ['./text-highlighting.component.css']
})
export class TextHighlightingComponent implements OnInit {

  @ViewChild('sideNav') sideNav;

  constructor() {
  }

  ngOnInit() {
  }

  share() {
    console.log('I share \'cause I care');
  }

  comment() {
    console.log('Give your opinion kindly');
  }

  highlight() {
    this.sideNav.toggle();
    console.log('A great idea to remember');
  }

  showActionContainer($event: TextSelectEvent) {
    console.log('Show actions container');
  }
}
