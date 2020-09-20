import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersNameComponent } from './players-name/players-name.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextSelectionDirective } from './text-highlighting/directive/text-selection.directive';
import { MatButtonModule } from '@angular/material/button';
import { TextSelectionComponent } from './text-highlighting/components/parent/text-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpMockRequestInterceptor } from './interceptor/interceptor.mock';
import { HttpRequestInterceptor } from './interceptor/interceptors';
import { OpenCloseComponent } from './open-close/open-close.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ScoredAgainstStatComponent } from './scored-against-stat/scored-against-stat.component';
import { D3BasicNetworkDiagramComponent } from './d3-basic-network-diagram/d3-basic-network-diagram.component';
import { DialogContentExample, MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

export const isMock = environment.mock;

@NgModule({
  declarations: [
    AppComponent,
    PlayersNameComponent,
    TextSelectionComponent,
    TextSelectionDirective,
    OpenCloseComponent,
    DashboardComponent,
    ScoredAgainstStatComponent,
    D3BasicNetworkDiagramComponent,
    MatDialogComponent,
    DialogContentExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents: [DialogContentExample],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
