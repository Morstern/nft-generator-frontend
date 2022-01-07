import { PreviewLayerItem } from './preview-layer-item';

export interface PreviewLayer {
  layerName: string;
  previewLayerItems: Array<PreviewLayerItem>;
}
