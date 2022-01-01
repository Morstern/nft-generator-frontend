import { Component, Input, OnInit } from '@angular/core';
import { LayerService } from 'src/app/services/upload-section/layer/layer.service';
import { Layer } from 'src/app/common/tos/layer';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
})
export class LayerComponent implements OnInit {
  @Input()
  layer: Layer;

  constructor(private layerService: LayerService) {}

  ngOnInit(): void {}

  removeLayer(): void {
    this.layerService.removeLayer(this.layer);
  }
}
