import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersNameComponent } from './players-name/players-name.component';
import { TextHighlightingComponent } from './text-highlighting/component/text-highlighting.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TextSelectionDirective } from './text-highlighting/directive/text-selection.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayersNameComponent,
    TextHighlightingComponent,
    TextSelectionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
