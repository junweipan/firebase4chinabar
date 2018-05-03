import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../../../shared/reserveservice.service';

import { Reservation } from '../../../shared/reservation.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  new_book_date = '';
  old_book_date = '';
  today = new Date().toString().substr(4, 11);
  reservationList: Reservation[];
  constructor(private reservationservice: ReserveserviceService,
              private tostr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    // console.log('today:' +  new Date().toString().substr(4, 11));

    const x = this.reservationservice.getData();
    x.snapshotChanges().subscribe(item => {
      this.reservationList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.reservationList.push(y as Reservation);
      });
    });
  }
  onEdit(reservation: Reservation) {
     this.reservationservice.selectedReservation = Object.assign({}, reservation);
  }
  onDelete($key: string) {
    if (confirm('Are you sure to delete this record ? ') === true) {
      this.reservationservice.deleteReservation($key);
      this.tostr.warning('Deleted Successfauly', 'Reservarion register');
    }
  }
  serachByDate() {
    if (this.old_book_date === null) {
      this.old_book_date = '';
    }
    this.new_book_date = this.old_book_date.toString().substr(0, 15);
    console.log(this.new_book_date);
    // const searchDay = this.book_date.substr(0, 15);
  }
  listAll() {
    this.new_book_date = '';
  }
}
