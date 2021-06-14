import { Injectable } from '@angular/core';
import { Flight } from '../../interfaces/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  flights: Flight[] = [
    {
      origin: 'miami',
      departure: 'USA',
      flightNumber: 1,
      departDate: new Date('2021-05-08T23:05:21.222z'),
      arriveDate: new Date('2021-05-06T23:05:21.222z'),
      nonstop: true,
    },
    {
      origin: 'india',
      departure: 'Sri Lanka',
      flightNumber: 234,
      departDate: new Date('2021-05-08T23:05:21.222z'),
      arriveDate: new Date('2021-05-06T23:05:21.222z'),
      nonstop: true,
    },
    {
      origin: 'india',
      departure: 'Sri Lanka',
      flightNumber: 234,
      departDate: new Date('2021-05-08T23:05:21.222z'),
      arriveDate: new Date('2021-05-06T23:05:21.222z'),
      nonstop: true,
    },
    {
      origin: 'india',
      departure: 'Sri Lanka',
      flightNumber: 234,
      departDate: new Date('2021-05-08T23:05:21.222z'),
      arriveDate: new Date('2021-05-06T23:05:21.222z'),
      nonstop: true,
    },
  ];

  constructor() {}

  getFlight(): Flight[] {
    return this.flights;
  }

  addFlight() {}

  dleteFlight() {}
}
