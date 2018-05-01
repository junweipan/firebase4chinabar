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
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ReservationsComponent,
    ReservationComponent,
    ReservationListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConifg),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
