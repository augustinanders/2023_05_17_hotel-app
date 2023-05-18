import { Component } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  booking: Booking = {
    id: 1,
    name: 'Augustin Anders',
    startDate: new Date('2021-07-13'),
    endDate: new Date('2021-07-26'),
    roomNumber: 100,
  };
}
