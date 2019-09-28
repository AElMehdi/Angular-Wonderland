import { Injectable } from '@angular/core';
import {Player} from '../shared/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PLAYERS: Player[] = [{
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

  constructor() { }

  getPlayers(): Player[] {
    return this.PLAYERS;
  }
}
