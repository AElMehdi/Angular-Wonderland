import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-highlighting',
  templateUrl: './text-highlighting.component.html',
  styleUrls: ['./text-highlighting.component.css']
})
export class TextHighlightingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleMouseUp() {
    if (window.getSelection().toString()) {
      console.log('Show a popup');
    }
  }
}
