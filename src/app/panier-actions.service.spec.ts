import { TestBed } from '@angular/core/testing';

import { PanierActionsService } from './panier-actions.service';

describe('PanierActionsService', () => {
  let service: PanierActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
