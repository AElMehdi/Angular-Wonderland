import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersNameComponent } from './players-name/players-name.component';
import { TextSelectionComponent } from './text-highlighting/components/parent/text-selection.component';

const routes: Routes = [
  {path: '', component: TextSelectionComponent},
  {path: 'players', component: PlayersNameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
