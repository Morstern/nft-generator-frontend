import { TestBed } from '@angular/core/testing';
import { Layer } from 'app/common/tos/layer';
import { LayerObject } from 'app/common/tos/layer-object';
import { LayerService } from './layer.service';

describe('LayerService', () => {
  let service: LayerService;

  const mockLayers: Array<Layer> = [
    { layerName: 'a', layerObjects: [] },
    { layerName: 'b', layerObjects: [] },
  ];

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

    service.removeLayer({ layerName: 'a', layerObjects: [] });

    expect(service.layers).toEqual([{ layerName: 'b', layerObjects: [] }]);
  });

  it('should update layer', () => {
    service.layers = mockLayers;
    const mockLayerObject: LayerObject = {
      fitnessScore: 50,
      name: 'xD',
      arrayBuffer: new ArrayBuffer(1),
    };

    service.updateLayer({
      layerName: 'a',
      layerObjects: [mockLayerObject],
    });

    expect(service.layers).toEqual([
      { layerName: 'a', layerObjects: [mockLayerObject] },
      { layerName: 'b', layerObjects: [] },
    ]);
  });
});
