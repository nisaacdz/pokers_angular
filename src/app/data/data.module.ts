import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: []
})

export class DataModule { }

export class Card {
  suit!: number;
  rank!: number;

  constructor(suit: number, rank: number) {
    this.rank = rank;
    this.suit = suit;
  }
}

export class Player {
  cards: Card[] = [];
  showCards: boolean = false;
}

export class Game {
  cards: Card[] = [];
  pos: number = 0;
  players: Player[] = [];
  center: Card[] = [];

  constructor() {
    for (let s = 0; s < 4; s++) {
      for (let r = 0; r < 14; r++) {
        this.cards.push(new Card(s, r));
      }
    }
  }

  newGame(size: number) {
    const player = this.getPlayer();
    player.showCards = true;
    size--;

    this.players.push(player);

    while (size-- > 0) {
      this.addPlayer();
    }
  }

  addPlayer() {
    this.players.push(this.getPlayer());
  }

  getPlayer() {
    return new Player();
  }

  distributeCards() {
    this.players.forEach(p => {
      p.cards.push(this.nextCard());
    });
  }

  revealCard() {
    this.center.push(this.nextCard());
  }

  private nextCard(): Card {
    return this.cards[this.pos++];
  }

  shuffleCards() {
    var cards = this.cards;
    var right = cards.length;

    while (right > 1) {
      var pos = Math.floor(Math.random() * right--);
      var temp = cards[pos];
      cards[pos] = cards[right];
      cards[right] = temp;
    }
  }
}
