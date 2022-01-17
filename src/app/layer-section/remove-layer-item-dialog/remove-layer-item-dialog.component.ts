import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LayerService } from '@services/common/layer-service/layer.service';
import { NotificationService } from '@services/common/notification-service/notification.service';

@Component({
  selector: 'app-remove-layer-item-dialog',
  templateUrl: './remove-layer-item-dialog.component.html',
})
export class RemoveLayerItemDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RemoveLayerItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private layerService: LayerService,
    private notificationService: NotificationService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  removePreviewLayerItemAndCloseDialog(): void {
    this.layerService.removePreviewLayerItem(this.data.previewLayerItem);
    this.notificationService.success({
      message: `Layer item with name: ${this.data.previewLayerItem.name}
      in layer: ${this.data.previewLayerItem.layerName} was removed successfully`,
    });
    this.closeDialog();
  }
}
