import {Injectable} from '@angular/core';
import {Player} from '../shared/player.model';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
  }

  getPlayers(): Observable<Player[]> {
    // return of(this.PLAYERS);
    return this.http.get<Player[]>('localhost:8080/api/fake/players');
  }
}
