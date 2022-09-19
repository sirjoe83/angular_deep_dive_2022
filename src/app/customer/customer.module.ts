import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

// Importe hinzufügen:
import { RouterModule } from '@angular/router';
import { CUSTOMER_ROUTES } from './customer.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    // Add SharedModule:
    SharedModule,
    // Add RouterModule + Routing Confi:
    RouterModule.forChild(CUSTOMER_ROUTES),
  ],
  declarations: [BookingHistoryComponent],
})
export class CustomerModule {}
