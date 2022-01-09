import { TestBed } from '@angular/core/testing';

import { LayerPropertyService } from './layer-property.service';

describe('LayerPropertyService', () => {
  let service: LayerPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
