import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersNameComponent } from './players-name/players-name.component';
import { TextSelectionComponent } from './text-highlighting/components/parent/text-selection.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';

const routes: Routes = [
  {path: '', component: TextSelectionComponent},
  {path: 'players', component: PlayersNameComponent},
  {path: 'animation', component: OpenCloseComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dialog', component: MatDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
