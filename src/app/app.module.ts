import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersNameComponent } from './players-name/players-name.component';
import { TextHighlightingComponent } from './text-highlighting/text-highlighting/text-highlighting.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersNameComponent,
    TextHighlightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
