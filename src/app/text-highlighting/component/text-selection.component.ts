import { Component, OnInit, ViewChild } from '@angular/core';
import { TextSelectEvent } from '../directive/text-selection.directive';

interface SelectionContainer {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-text-highlighting',
  templateUrl: './text-selection.component.html',
  styleUrls: ['./text-selection.component.css']
})

export class TextSelectionComponent implements OnInit {

  @ViewChild('sideNav') sideNav;
  hostRectangle: SelectionContainer;
  private selectedText: string;

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
  }

  showActionsContainer(event: TextSelectEvent) {
    // console.log('I am working too?', event.text);
    // console.group('Text Select Event');
    // console.log('Text:', event.text);
    // console.log('Viewport Rectangle:', event.viewportRectangle);
    // console.log('Host Rectangle:', event.hostRectangle);
    // console.groupEnd();

    if (event.hostRectangle) {
      this.hostRectangle = event.hostRectangle;
      this.selectedText = event.text;
    } else {
      this.hostRectangle = null;
      this.selectedText = '';
    }
  }
}
