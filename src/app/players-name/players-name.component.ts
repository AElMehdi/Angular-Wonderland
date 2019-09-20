import {Component, OnInit} from '@angular/core';
import {Player} from './shared/player.model';

@Component({
  selector: 'app-players-name',
  templateUrl: './players-name.component.html',
  styleUrls: ['./players-name.component.sass']
})
export class PlayersNameComponent implements OnInit {

  players: Player[] = [{
    id: 1,
    name: 'El Mehdi',
    team: 'Majd'
  }, {
    id: 1,
    name: 'Marouane',
    team: 'Majd'
  },
    {
      id: 1,
      name: 'Yassine',
      team: 'Majd'
    },
    {
      id: 1,
      name: 'Omar',
      team: 'Majd'
    },
    {
      id: 1,
      name: 'Chaouki',
      team: 'Majd'
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
