import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { ServerLayerItem } from '@common/tos/server-layer-item';
import b64toBlob from 'b64-to-blob';

export function convertPreviewLayerItemsToServerLayerItems(
  previewLayerItems: Array<PreviewLayerItem>
): Array<ServerLayerItem> {
  return previewLayerItems.map((previewLayerItem) =>
    convertLayerItemPreviewToLayerServerItem(previewLayerItem)
  );
}

function convertLayerItemPreviewToLayerServerItem(
  previewLayerItem: PreviewLayerItem
): ServerLayerItem {
  return {
    blob: convertBase64ToBlob(
      previewLayerItem.base64img,
      previewLayerItem.fileType
    ),
    fileType: previewLayerItem.fileType,
    fitnessScore: previewLayerItem.fitnessScore,
    name: previewLayerItem.name,
  };
}

function convertBase64ToBlob(base64img: string, fileType: string): Blob {
  return b64toBlob(base64img.split(',')[1], fileType);
}
