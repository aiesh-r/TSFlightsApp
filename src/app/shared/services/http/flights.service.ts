import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  // path: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {
    this.backEndURL = this.getBackEndUrl();
  }

  backEndURL: string;

  getFlight(): Observable<any> {
    return this.http.get(`${this.backEndURL}/flights/`);
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
