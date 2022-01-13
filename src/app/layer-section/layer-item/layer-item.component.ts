import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { RemoveLayerItemDialogComponent } from 'app/layer-section/remove-layer-item-dialog/remove-layer-item-dialog.component';

@Component({
  selector: 'app-layer-item',
  templateUrl: './layer-item.component.html',
})
export class LayerItemComponent implements OnInit {
  @Input() previewLayerItem: PreviewLayerItem;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openRemoveLayerItemDialog($event: any): void {
    $event.stopPropagation();
    this.dialog.open(RemoveLayerItemDialogComponent, {
      width: '250px',
      data: { previewLayerItem: this.previewLayerItem },
    });
  }
}
