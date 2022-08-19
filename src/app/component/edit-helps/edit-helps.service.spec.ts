import { TestBed } from '@angular/core/testing';

import { EditHelpsService } from './edit-helps.service';

describe('EditHelpsService', () => {
  let service: EditHelpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditHelpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
