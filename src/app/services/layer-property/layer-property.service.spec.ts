import { TestBed } from '@angular/core/testing';
import { PreviewLayer } from '@common/tos/preview-layer';
import { LayerPropertyService } from './layer-property.service';

describe('LayerPropertyService', () => {
  let service: LayerPropertyService;

  const MOCK_PREVIEW_LAYER: PreviewLayer = {
    layerName: '2137',
    previewLayerItems: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update selectedLayer', (done) => {
    service.selectedLayer$.subscribe((data) => {
      expect(data).toEqual(MOCK_PREVIEW_LAYER);
      done();
    });

    service.selectedLayer = MOCK_PREVIEW_LAYER;
  });
});
