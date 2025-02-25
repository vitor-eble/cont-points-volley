import { TestBed } from '@angular/core/testing';

import { EditNameService } from './edit-name.service';

describe('EditNameService', () => {
  let service: EditNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
