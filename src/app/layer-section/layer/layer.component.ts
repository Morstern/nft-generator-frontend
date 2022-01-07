import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayer } from '@common/tos/preview-layer';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { SafeUnsubscribe } from 'app/common/utils/SafeUnsubscribe';
import { concatMap, mergeMap, Subject, takeUntil } from 'rxjs';
import { RemoveLayerDialogComponent } from '../remove-layer-dialog/remove-layer-dialog.component';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
})
export class LayerComponent extends SafeUnsubscribe implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  @Input() layer: PreviewLayer;

  private _fileList$: Subject<Array<File>> = new Subject<Array<File>>();

  constructor(public dialog: MatDialog, private layerService: LayerService) {
    super();
  }

  ngOnInit(): void {
    this._fileList$
      .pipe(
        mergeMap((files) => files),
        concatMap((file: File) => this.readFileAndCreateLayerItem(file)),
        takeUntil(this._ngUnsubscribe)
      )
      .subscribe((newLayerItem) => {
        this.layer.previewLayerItems = [
          ...this.layer.previewLayerItems,
          <PreviewLayerItem>newLayerItem,
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

  private readFileAndCreateLayerItem(file: File): Promise<PreviewLayerItem> {
    return new Promise((resolve) => {
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        resolve({
          base64img: reader.result,
          name: file.name,
          fitnessScore: 50,
          fileType: file.type,
        } as PreviewLayerItem);
      };
      reader.readAsDataURL(file);
    });
  }
}
