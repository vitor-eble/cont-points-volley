import { TestBed } from '@angular/core/testing';
import { CounterSetsService } from './counter-sets.service';

describe('CounterSetsService', () => {
  let service: CounterSetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterSetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
