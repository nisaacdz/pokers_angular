import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { GamerComponent } from './ui/gamer/gamer.component';
import { PieceComponent } from './ui/gamer/piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    GamerComponent,
    PieceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
