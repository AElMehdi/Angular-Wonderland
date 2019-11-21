import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayersNameComponent} from './players-name/players-name.component';
import {TextHighlightingComponent} from './text-highlighting/component/text-highlighting.component';

const routes: Routes = [
  {path: '', component: TextHighlightingComponent},
  {path: 'players', component: PlayersNameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
