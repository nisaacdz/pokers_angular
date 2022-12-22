import { Component, Input } from '@angular/core';
import { Player } from 'src/app/data/data.module';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent {
  @Input() player!: Player;
}
