import { TestBed } from '@angular/core/testing';

import { PanierModifiesService } from './panier-modifies.service';

describe('PanierModifiesService', () => {
  let service: PanierModifiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierModifiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
