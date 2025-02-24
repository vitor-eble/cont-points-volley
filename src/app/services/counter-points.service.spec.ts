import { TestBed } from '@angular/core/testing';

import { CounterPointsService } from './counter-points.service';

describe('CounterPointsService', () => {
  let service: CounterPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
