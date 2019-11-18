import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersNameComponent} from './players-name/players-name.component';

const routes: Routes = [
  { path: 'players', component: PlayersNameComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
