import { Component, Input } from '@angular/core';
import { Card } from 'src/app/data/data.module';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent {
  @Input() card!: Card;
  @Input() showCards!: boolean;
}
