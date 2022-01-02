import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { Layer } from 'app/common/tos/layer';
import { LayerObject } from 'app/common/tos/layer-object';
import { concatMap, mergeMap, Observable, of, Subject } from 'rxjs';
import { RemoveLayerDialogComponent } from '../remove-layer-dialog/remove-layer-dialog.component';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
})
export class LayerComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  @Input() layer: Layer;

  private _fileList$: Subject<Array<File>> = new Subject<Array<File>>();

  constructor(public dialog: MatDialog, private layerService: LayerService) {}

  ngOnInit(): void {
    this._fileList$
      .pipe(
        mergeMap((files) => files),
        concatMap((file: File) => this.readFileAndCreateLayerObject(file))
      )
      .subscribe((newLayerObject) => {
        this.layer.layerObjects = [
          ...this.layer.layerObjects,
          <LayerObject>newLayerObject,
        ];
        this.layerService.updateLayer(this.layer);
      });
  }

  openRemoveLayerDialog($event: any): void {
    $event.stopPropagation();
    this.dialog.open(RemoveLayerDialogComponent, {
      width: '250px',
      data: { layer: this.layer },
    });
  }

  onFilesSelected(): void {
    const fileList: FileList = this.fileInput.nativeElement.files;
    this._fileList$.next(this.makeAnArrayOfFilesFromFileList(fileList));
  }

  private makeAnArrayOfFilesFromFileList(fileList: FileList): Array<File> {
    return [].map.call(fileList, (file: File) => {
      return file;
    }) as Array<File>;
  }

  private readFileAndCreateLayerObject(file: File): Promise<LayerObject> {
    return new Promise((resolve) => {
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        resolve({
          arrayBuffer: reader.result,
          name: file.name,
          fitnessScore: 50,
        } as LayerObject);
      };
      reader.readAsArrayBuffer(file);
    });
  }
}
