import { TestBed } from '@angular/core/testing';
import { PreviewLayer } from '@common/tos/preview-layer';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { LayerService } from './layer.service';

describe('LayerService', () => {
  let service: LayerService;

  const mockLayers: Array<PreviewLayer> = [
    { layerName: 'a', previewLayerItems: [] },
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

    service.layers = mockLayers;

    expect(service.layers).toEqual(mockLayers);
  });

  it('should remove layer', () => {
    service.layers = mockLayers;

    service.removeLayer({ layerName: 'a', previewLayerItems: [] });

    expect(service.layers).toEqual([{ layerName: 'b', previewLayerItems: [] }]);
  });

  it('should update layer', () => {
    service.layers = mockLayers;
    const mockPreviewLayerItem: PreviewLayerItem = {
      fitnessScore: 50,
      name: 'xD',
      base64img: 'costam',
      fileType: 'image/jpg',
    };

    service.updateLayer({
      layerName: 'a',
      previewLayerItems: [mockPreviewLayerItem],
    });

    expect(service.layers).toEqual([
      { layerName: 'a', previewLayerItems: [mockPreviewLayerItem] },
      { layerName: 'b', previewLayerItems: [] },
    ]);
  });
});
