import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../interfaces/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }

  backEndURL: string;

  getFlight(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/`);
  }

  getFiteredFlights(origin: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/query/${origin}/${dest}`);
  }

  postFlight(flight: Flight): Observable<any> {
    return this.http.post(`${this.backEndURL}/flights`, flight);
  }

  addFlight() {}

  dleteFlight() {}

  getBackEndUrl(): string {
    const segements = document.URL.split('/');
    const reggie = new RegExp(/localhost/);
    return reggie.test(segements[2])
      ? 'http://localhost:3000'
      : 'https://shrouded-ravine-23045.herokuapp.com';
  }
}
