import { HttpClient } from '@angular/common/http';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

const DEBUG = false;
export const createFlightService = (http: HttpClient) => {
  if (!DEBUG) {
    return new DefaultFlightService(
      http,
      'http://demo.ANGULARarchitects.io/api/'
    );
  } else {
    return new DummyFlightService();
  }
};
