import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/shared/services/http/flights.service';
import { Flight } from 'src/app/shared/interfaces/flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  flights: Flight[] = [];
  public selectedOrigin: string = '';
  public selectedDestination: string = '';
  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsService.getFlight().subscribe((data) => {
      this.flights = data;
    });
  }

  getFilteredFlights(): void {
    const origin = this.selectedOrigin;
    const dest = this.selectedDestination;
    this.flightsService.getFiteredFlights(origin, dest).subscribe((data) => {
      this.flights = data;
    });
  }
}
