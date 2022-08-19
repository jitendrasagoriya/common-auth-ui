import { TestBed } from '@angular/core/testing';

import { AddHelpsService } from './add-helps.service';

describe('AddHelpsService', () => {
  let service: AddHelpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHelpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
