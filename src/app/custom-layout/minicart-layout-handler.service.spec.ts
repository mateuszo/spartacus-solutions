import { TestBed } from '@angular/core/testing';

import { MinicartLayoutHandlerService } from './minicart-layout-handler.service';

describe('MinicartLayoutHandlerService', () => {
  let service: MinicartLayoutHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinicartLayoutHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
