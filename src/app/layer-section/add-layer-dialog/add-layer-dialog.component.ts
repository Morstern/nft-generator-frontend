import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Layer } from 'app/common/tos/layer';
import { LayerService } from '@services/upload-section/layer/layer.service';

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
      } as Layer,
    ];
    this.closeDialog();
  }
}
