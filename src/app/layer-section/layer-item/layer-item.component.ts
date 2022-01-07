import { Component, Input, OnInit } from '@angular/core';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';

@Component({
  selector: 'app-layer-item',
  templateUrl: './layer-item.component.html',
})
export class LayerItemComponent implements OnInit {
  @Input() previewLayerItem: PreviewLayerItem;

  constructor() {}

  ngOnInit(): void {}
}
