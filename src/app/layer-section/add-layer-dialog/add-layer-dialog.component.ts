import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PreviewLayer } from '@common/tos/preview-layer';
import { LayerService } from '@services/common/layer-service/layer.service';
import { NotificationService } from '@services/common/notification-service/notification.service';

@Component({
  selector: 'app-add-layer-dialog',
  templateUrl: './add-layer-dialog.component.html',
})
export class AddLayerDialogComponent implements OnInit {
  newLayer: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddLayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private layerService: LayerService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  addLayerAndCloseDialog(): void {
    const alreadyExistingLayers: Array<PreviewLayer> = this.data.layers;

    if (
      alreadyExistingLayers.find((layer) => layer.layerName == this.newLayer) !=
      undefined
    ) {
      this.notificationService.error({
        message: `Layer with name: ${this.newLayer} already exist`,
      });
      return;
    }

    this.layerService.layers = [
      ...this.data.layers,
      {
        layerName: this.newLayer,
        previewLayerItems: [],
      } as PreviewLayer,
    ];
    this.closeDialog();
    this.notificationService.success({
      message: 'Sucessfully added new layer',
    });
  }

  get isButtonDisabled(): boolean {
    return this.newLayer.length == 0 ? true : false;
  }
}
