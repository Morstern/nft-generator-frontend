import { Component, OnInit } from '@angular/core';
import { PreviewLayer } from '@common/tos/preview-layer';
import { SafeUnsubscribe } from '@common/utils/SafeUnsubscribe';
import { LayerService } from '@services/common/layer-service/layer.service';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layer-properties-container',
  templateUrl: './layer-properties-container.component.html',
})
export class LayerPropertiesContainerComponent
  extends SafeUnsubscribe
  implements OnInit
{
  layers$: Observable<Array<PreviewLayer>>;

  constructor(private layerService: LayerService) {
    super();
  }

  ngOnInit(): void {
    this.layers$ = this.layerService.layers$.pipe(
      takeUntil(this._ngUnsubscribe)
    );
  }
}
