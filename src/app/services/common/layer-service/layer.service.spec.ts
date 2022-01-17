import { TestBed } from '@angular/core/testing';
import { PreviewLayer } from '@common/tos/preview-layer';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { toArray } from 'rxjs';
import { LayerService } from './layer.service';

describe('LayerService', () => {
  let service: LayerService;

  const MOCK_PREVIEW_LAYER_ITEM: PreviewLayerItem = {
    base64img: 'costam',
    fitnessScore: 50,
    name: 'test',
    fileType: 'image/png',
    layerName: 'a',
  };

  const MOCK_LAYERS: Array<PreviewLayer> = [
    { layerName: 'a', previewLayerItems: [MOCK_PREVIEW_LAYER_ITEM] },
    { layerName: 'b', previewLayerItems: [] },
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

    service.layers = MOCK_LAYERS;

    expect(service.layers).toEqual(MOCK_LAYERS);
  });

  it('should remove layer', () => {
    service.layers = MOCK_LAYERS;

    service.removeLayer({ layerName: 'a', previewLayerItems: [] });

    expect(service.layers).toEqual([{ layerName: 'b', previewLayerItems: [] }]);
  });

  it('should update layer', () => {
    service.layers = MOCK_LAYERS;

    service.updatePreviewLayerItems({
      layerName: 'a',
      previewLayerItems: [MOCK_PREVIEW_LAYER_ITEM],
    });

    expect(service.layers).toEqual([
      { layerName: 'a', previewLayerItems: [MOCK_PREVIEW_LAYER_ITEM] },
      { layerName: 'b', previewLayerItems: [] },
    ]);
  });

  it('should remove layer item from previewLayer', () => {
    service.layers = MOCK_LAYERS;

    service.removePreviewLayerItem(MOCK_PREVIEW_LAYER_ITEM);

    expect(service.layers).toEqual([
      { layerName: 'a', previewLayerItems: [] },
      { layerName: 'b', previewLayerItems: [] },
    ]);
  });

  it('should remove layer item from previewLayer', (done) => {
    service.layers = MOCK_LAYERS;

    service.layers$.subscribe((layers) => {
      expect(layers).toEqual(MOCK_LAYERS);
      done();
    });
  });
});
