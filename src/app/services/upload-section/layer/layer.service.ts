import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Layer } from '../../../common/tos/layer';

@Injectable({
  providedIn: 'root',
})
export class LayerService {
  private _layers$: BehaviorSubject<Array<Layer>> = new BehaviorSubject<
    Array<Layer>
  >([]);

  constructor() {}

  get layers$(): Observable<Array<Layer>> {
    return this._layers$.asObservable();
  }

  get layers(): Array<Layer> {
    return this._layers$.getValue();
  }

  set layers(layers: Array<Layer>) {
    this._layers$.next(layers);
  }

  removeLayer(layerToRemove: Layer) {
    this._layers$.next(
      this.layers.filter((layer) => layerToRemove.layerName != layer.layerName)
    );
  }
}
