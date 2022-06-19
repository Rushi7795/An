import { TestBed } from '@angular/core/testing';

import { MultimessagesService } from './multimessages.service';

describe('MultimessagesService', () => {
  let service: MultimessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultimessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
