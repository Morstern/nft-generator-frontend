import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LayerService } from 'src/app/services/upload-section/layer/layer.service';
import { Layer } from 'src/app/common/tos/layer';
import { RemoveLayerDialogComponent } from '../remove-layer-dialog/remove-layer-dialog.component';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
})
export class LayerComponent implements OnInit {
  @Input()
  layer: Layer;

  constructor(public dialog: MatDialog, private layerService: LayerService) {}

  ngOnInit(): void {}

  openRemoveLayerDialog($event: any): void {
    $event.stopPropagation();
    this.dialog.open(RemoveLayerDialogComponent, {
      width: '250px',
      data: { layer: this.layer },
    });
  }
}
