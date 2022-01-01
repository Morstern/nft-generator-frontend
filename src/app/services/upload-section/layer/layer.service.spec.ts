import { TestBed } from '@angular/core/testing';
import { Layer } from 'app/common/tos/layer';

import { LayerService } from './layer.service';

describe('LayerService', () => {
  let service: LayerService;

  const mockLayers: Array<Layer> = [{ layerName: 'a' }, { layerName: 'b' }];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set new layers', () => {
    expect(service.layers).toEqual([]);

    service.layers = mockLayers;

    expect(service.layers).toEqual(mockLayers);
  });

  it('should remove layer', () => {
    service.layers = mockLayers;

    service.removeLayer({ layerName: 'a' });

    expect(service.layers).toEqual([{ layerName: 'b' }]);
  });
});
