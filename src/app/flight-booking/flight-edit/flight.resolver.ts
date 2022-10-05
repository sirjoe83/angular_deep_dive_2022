import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Injectable()
export class FlightResolver implements Resolve<Flight> {
  constructor(private flightService: FlightService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Flight> {
    let id = route.params['id'];
    return this.flightService.findById(id);
  }
}
