import { Component } from '@angular/core';
import { Game } from './data/data.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokers';
  gameObj = new Game();
}
