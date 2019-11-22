import {Component, OnInit, ViewChild} from '@angular/core';

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

  handleMouseUp() {
    if (window.getSelection().toString()) {
      console.log('Show a popup');
      this.sideNav.toggle();
    }
  }
}
