import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { Layer } from 'app/common/tos/layer';
import { AddLayerDialogComponent } from '../add-layer-dialog/add-layer-dialog.component';

@Component({
  selector: 'app-upload-section',
  templateUrl: './upload-section.component.html',
})
export class UploadSectionComponent implements OnInit {
  layers: Array<Layer>;

  constructor(public dialog: MatDialog, private layerService: LayerService) {}

  ngOnInit(): void {
    this.layerService.layers$
      .pipe() // add on delete
      .subscribe((data) => (this.layers = data));
  }

  openAddLayerDialog(): void {
    this.dialog.open(AddLayerDialogComponent, {
      width: '250px',
      data: { layers: this.layers },
    });
  }

  drop(event: CdkDragDrop<Layer[]>): void {
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
