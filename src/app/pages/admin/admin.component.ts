import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/shared/interfaces/flight.model';
import { FlightsService } from 'src/app/shared/services/http/flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  origin: string = '';
  destination: string = '';
  flightNumber: any;
  depart: any;
  arrive: any;
  nonstop: boolean = false;
  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {}

  toggleNonstop(): void {
    this.nonstop = !this.nonstop;
  }

  createFlight(): void {
    console.log('sfsfdfs');
     console.log('Commit test');
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      fightnumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop,
    };

    this.flightService.postFlight(flight).subscribe((data) => {});
  }
}
