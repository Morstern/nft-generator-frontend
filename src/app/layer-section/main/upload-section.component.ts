import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayer } from '@common/tos/preview-layer';
import { LayerService } from '@services/common/layer.service';
import { SafeUnsubscribe } from 'app/common/utils/SafeUnsubscribe';
import { takeUntil } from 'rxjs';
import { AddLayerDialogComponent } from '../add-layer-dialog/add-layer-dialog.component';

@Component({
  selector: 'app-upload-section',
  templateUrl: './upload-section.component.html',
})
export class UploadSectionComponent extends SafeUnsubscribe implements OnInit {
  layers: Array<PreviewLayer>;

  constructor(public dialog: MatDialog, private layerService: LayerService) {
    super();
  }

  ngOnInit(): void {
    this.layerService.layers$
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((data) => (this.layers = data));
  }

  openAddLayerDialog(): void {
    this.dialog.open(AddLayerDialogComponent, {
      width: '250px',
      data: { layers: this.layers },
    });
  }

  drop(event: CdkDragDrop<PreviewLayer[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  sendPicturesToBackend(): void {
    console.log(this.layerService.layers);
  }
}
