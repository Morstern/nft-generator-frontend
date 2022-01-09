import { Injectable } from '@angular/core';
import { PreviewLayer } from '@common/tos/preview-layer';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayerPropertyService {
  private _selectedLayer$: Subject<PreviewLayer> = new Subject<PreviewLayer>();

  get selectedLayer$(): Observable<PreviewLayer> {
    return this._selectedLayer$.asObservable();
  }

  set selectedLayer(selectedPreviewLayer: PreviewLayer) {
    this._selectedLayer$.next(selectedPreviewLayer);
  }
}
