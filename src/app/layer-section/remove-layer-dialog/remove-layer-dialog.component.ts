import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LayerService } from 'src/app/services/upload-section/layer/layer.service';

@Component({
  selector: 'app-remove-layer-dialog',
  templateUrl: './remove-layer-dialog.component.html',
})
export class RemoveLayerDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RemoveLayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private layerService: LayerService
  ) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  removeLayerAndCloseDialog(): void {
    this.layerService.removeLayer(this.data.layer);
    this.closeDialog();
  }
}
