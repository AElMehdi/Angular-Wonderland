import { UserFormModule } from './user-form/user-form.module';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
