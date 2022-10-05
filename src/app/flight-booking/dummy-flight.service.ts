import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';
@Injectable({
  providedIn: 'root',
})
export class DummyFlightService implements FlightService {
  constructor() {}
  flights: Flight[] = [];
  flightsSubject = new BehaviorSubject<Flight[]>([]);
  flights$ = this.flightsSubject.asObservable();
  delay(): void {
    throw new Error('Method not implemented.');
  }
  load(from: string, to: string, urgent?: boolean | undefined): void {
    this.find(from, to).subscribe((flights) => {
      this.flights = flights;
    });

    // Add this line:
    this.flightsSubject.next(this.flights);
  }
  find(from: string, to: string): Observable<Flight[]> {
    return of([
      {
        id: 1,
        from: 'Frankfurt',
        to: 'Flagranti',
        date: '2022-01-02T19:00+01:00',
      },
      {
        id: 2,
        from: 'Frankfurt',
        to: 'Kognito',
        date: '2022-01-02T19:30+01:00',
      },
      {
        id: 3,
        from: 'Frankfurt',
        to: 'Mallorca',
        date: '2022-01-02T20:00+01:00',
      },
    ]);
  }
}
