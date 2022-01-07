import { PreviewLayer } from '@common/tos/preview-layer';
import { ServerLayer } from '@common/tos/server-layer';
import { convertPreviewLayerItemsToServerLayerItems } from './layer-item-converter';

export function convertPreviewLayersToServerLayers(
  previewLayers: Array<PreviewLayer>
): Array<ServerLayer> {
  return previewLayers.map((previewLayer) =>
    convertPreviewLayerToServerLayer(previewLayer)
  );
}

function convertPreviewLayerToServerLayer(
  previewLayer: PreviewLayer
): ServerLayer {
  return {
    layerName: previewLayer.layerName,
    previewLayerItems: convertPreviewLayerItemsToServerLayerItems(
      previewLayer.previewLayerItems
    ),
  };
}
