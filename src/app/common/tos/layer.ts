import { LayerObject } from './layer-object';

export interface Layer {
  layerName: string;
  layerObjects: Array<LayerObject>;
}
