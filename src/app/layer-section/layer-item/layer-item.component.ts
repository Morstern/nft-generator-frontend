import { Component, Input, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { RemoveLayerItemDialogComponent } from 'app/layer-section/remove-layer-item-dialog/remove-layer-item-dialog.component';

@Component({
  selector: 'app-layer-item',
  templateUrl: './layer-item.component.html',
})
export class LayerItemComponent {
  @Input() previewLayerItem: PreviewLayerItem;

  constructor(public dialog: MatDialog) {}


  openRemoveLayerItemDialog($event: any): void {
    $event.stopPropagation();
    this.dialog.open(RemoveLayerItemDialogComponent, {
      width: '250px',
      data: { previewLayerItem: this.previewLayerItem },
    });
  }
}
