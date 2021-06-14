import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../interfaces/flight.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  // flights: Flight[] = [
  //   {
  //     origin: 'miami',
  //     departure: 'USA',
  //     flightNumber: 1,
  //     departDate: new Date('2021-05-08T23:05:21.222z'),
  //     arriveDate: new Date('2021-05-06T23:05:21.222z'),
  //     nonstop: true,
  //   },
  //   {
  //     origin: 'india',
  //     departure: 'Sri Lanka',
  //     flightNumber: 234,
  //     departDate: new Date('2021-05-08T23:05:21.222z'),
  //     arriveDate: new Date('2021-05-06T23:05:21.222z'),
  //     nonstop: true,
  //   },
  //   {
  //     origin: 'india',
  //     departure: 'Sri Lanka',
  //     flightNumber: 234,
  //     departDate: new Date('2021-05-08T23:05:21.222z'),
  //     arriveDate: new Date('2021-05-06T23:05:21.222z'),
  //     nonstop: true,
  //   },
  //   {
  //     origin: 'india',
  //     departure: 'Sri Lanka',
  //     flightNumber: 234,
  //     departDate: new Date('2021-05-08T23:05:21.222z'),
  //     arriveDate: new Date('2021-05-06T23:05:21.222z'),
  //     nonstop: true,
  //   },
  // ];

  path: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getFlight(): Observable<any> {
    return this.http.get(this.path + '/flights/');
  }

  addFlight() {}

  dleteFlight() {}
}
