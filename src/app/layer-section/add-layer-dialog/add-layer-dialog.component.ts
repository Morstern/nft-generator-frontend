import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { PreviewLayer } from '@common/tos/preview-layer';

@Component({
  selector: 'app-add-layer-dialog',
  templateUrl: './add-layer-dialog.component.html',
})
export class AddLayerDialogComponent implements OnInit {
  newLayer: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddLayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  addLayerAndCloseDialog(): void {
    this.layerService.layers = [
      ...this.data.layers,
      {
        layerName: this.newLayer,
        previewLayerItems: [],
      } as PreviewLayer,
    ];
    this.closeDialog();
  }

  get isButtonDisabled(): boolean {
    return this.newLayer.length == 0 ? true : false;
  }
}
