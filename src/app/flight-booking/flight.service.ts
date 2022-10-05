// src/app/default-flight.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { Flight } from './flight';
import { createFlightService } from './flight-service.factory';

@Injectable({
  providedIn: 'root',
  useFactory: createFlightService,
  deps: [HttpClient],
})
export abstract class FlightService {
  abstract flightsSubject: BehaviorSubject<Flight[]>;
  abstract flights: Flight[];
  abstract flights$: Observable<Flight[]>;
  abstract delay(): void;
  abstract find(from: string, to: string): Observable<Flight[]>;
  abstract load(from: string, to: string, urgent?: boolean): void;
  abstract findById(id: string): Observable<Flight>;

  /*
  // We will refactor this to an observable in a later exercise!
  flights: Flight[] = [];

  private flightsSubject = new BehaviorSubject<Flight[]>([]);
  readonly flights$ = this.flightsSubject.asObservable();

  constructor(private http: HttpClient) {}

  load(from: string, to: string, urgent?: boolean): void {
    const o = this.find(from, to).subscribe(
      (flights) => {
        this.flights = flights;

        // Add this line:
        this.flightsSubject.next(flights);
      },
      (err) => console.error('Error loading flights', err)
    );
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(url, { headers, params });
  }

  delay(): void {
    const ONE_MINUTE = 1000 * 60;

    const oldFlights = this.flights;
    const oldFlight = oldFlights[0];
    const oldDate = new Date(oldFlight.date);

    // Immutable
    const newDate = new Date(oldDate.getTime() + 15 * ONE_MINUTE);
    const newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
    const newFlights = [newFlight, ...oldFlights.slice(1)];
    this.flights = newFlights;

    this.flightsSubject.next(newFlights);
  }
  */
}
