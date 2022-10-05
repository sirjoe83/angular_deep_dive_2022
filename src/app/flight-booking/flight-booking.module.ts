// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FormsModule } from '@angular/forms';
import { FlightResolver } from './flight-edit/flight.resolver';

@NgModule({
  imports: [
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,
    SharedModule.forChild(),
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightBookingComponent,
    FlightEditComponent,
  ],
  providers: [FlightResolver],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
