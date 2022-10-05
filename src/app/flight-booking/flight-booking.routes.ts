// src/app/flight-booking/flight-booking.routes.ts

import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

// Diesen Import hinzufügen
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { FlightBookingComponent } from './flight-booking.component';
import { CanDeactivateGuard } from '../shared/deactivation/can-deactivate.guard';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: 'flight-booking',
    component: FlightBookingComponent,
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent,
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
];
