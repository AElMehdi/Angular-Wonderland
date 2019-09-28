import {Component, OnInit} from '@angular/core';
import {Player} from './shared/player.model';
import {PlayerService} from './service/player.service';

@Component({
  selector: 'app-players-name',
  templateUrl: './players-name.component.html',
  styleUrls: ['./players-name.component.sass']
})
export class PlayersNameComponent implements OnInit {

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(): Player[] {
    return this.playerService.getPlayers();
  }
}
