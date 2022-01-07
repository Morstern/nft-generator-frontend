import { ServerLayerItem } from "./server-layer-item";

export interface ServerLayer {
    layerName: string;
    previewLayerItems: Array<ServerLayerItem>;
  }
  