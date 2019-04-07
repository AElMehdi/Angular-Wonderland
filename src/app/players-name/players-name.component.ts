import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-name',
  templateUrl: './players-name.component.html',
  styleUrls: ['./players-name.component.sass']
})
export class PlayersNameComponent implements OnInit {

  greeting = 'Hello World';

  constructor() {
  }

  ngOnInit() {
  }

}
