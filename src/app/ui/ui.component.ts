import { Component, Input } from '@angular/core';
import { Game } from '../data/data.module';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {
  @Input() game!: Game;

  addPlayer() {
    this.game.addPlayer();
  }

  distributeCards() {
    this.game.distributeCards();
  }

  revealCard() {
    this.game.revealCard();
  }

  newGame(size: number) {
    this.game.pos = 0;
    this.game.center = [];
    this.game.shuffleCards();
    this.game.players = [];
    this.game.newGame(size);
  }

  home() {
    this.game.players = [];
    this.game.pos = 0;
    this.game.center = [];
  }
}
