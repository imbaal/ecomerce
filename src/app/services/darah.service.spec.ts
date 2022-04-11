import { TestBed } from '@angular/core/testing';

import { DarahService } from './darah.service';

describe('DarahService', () => {
  let service: DarahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
