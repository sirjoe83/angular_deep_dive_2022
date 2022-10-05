// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/shared/deactivation/can-deactivate.guard';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss'],
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent {
  id = 0;
  showDetails = false;
  sender!: Observer<boolean>;
  showWarning = false;

  constructor(private route: ActivatedRoute) {}

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canDeactivate(): Observable<boolean> {
    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });
  }
}
