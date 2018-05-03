import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { ReservationComponent } from './admin/reservations/reservation/reservation.component';
import { ReservationListComponent } from './admin/reservations/reservation-list/reservation-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {ToastrModule} from 'ngx-toastr';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin',
   // canActivate: [AuthGuard],
  component: AdminComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ReservationsComponent,
    ReservationComponent,
    ReservationListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConifg),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
