import { TestBed } from '@angular/core/testing';

import { produitsService } from './produits.service';

describe('ProduitsService', () => {
  let service: produitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(produitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
