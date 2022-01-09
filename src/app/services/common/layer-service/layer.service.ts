import { Injectable } from '@angular/core';
import { PreviewLayer } from '@common/tos/preview-layer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayerService {
  private _layers$: BehaviorSubject<Array<PreviewLayer>> = new BehaviorSubject<
    Array<PreviewLayer>
  >([]);

  constructor() {}

  get layers$(): Observable<Array<PreviewLayer>> {
    return this._layers$.asObservable();
  }

  get layers(): Array<PreviewLayer> {
    return this._layers$.getValue();
  }

  set layers(layers: Array<PreviewLayer>) {
    this._layers$.next(layers);
  }

  removeLayer(layerToRemove: PreviewLayer) {
    this._layers$.next(
      this.layers.filter((layer) => layerToRemove.layerName != layer.layerName)
    );
  }

  updateLayer(updatedLayer: PreviewLayer): void {
    const layers = this.layers;
    layers
      .filter((layer) => layer.layerName === updatedLayer.layerName)
      .forEach(
        (layer) => (layer.previewLayerItems = updatedLayer.previewLayerItems)
      );
    this.layers = layers;
  }
}
