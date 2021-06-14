import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/shared/services/http/flights.service';
import { Flight } from 'src/app/shared/interfaces/flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  flights: any[] = [];
  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    // this.getFlights();
    this.flightsService.getFlight().subscribe((data) => {
      this.flights = data;
    });
  }

  // getFlights() {
  //   this.flights = this.flightsService.getFlight();
  // }
}
