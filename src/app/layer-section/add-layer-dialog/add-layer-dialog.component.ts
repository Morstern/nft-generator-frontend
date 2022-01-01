import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Layer } from 'src/app/common/tos/layer';
import { LayerService } from 'src/app/services/upload-section/layer/layer.service';

@Component({
  selector: 'app-add-layer-dialog',
  templateUrl: './add-layer-dialog.component.html',
})
export class AddLayerDialogComponent implements OnInit {
  newProperty: string = '';

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
        layerName: this.newProperty,
      } as Layer,
    ];
    this.closeDialog();
  }
}
