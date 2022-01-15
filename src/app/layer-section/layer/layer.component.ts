import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayer } from '@common/tos/preview-layer';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { LayerService } from '@services/common/layer-service/layer.service';
import { NotificationService } from '@services/common/notification-service/notification.service';
import { SafeUnsubscribe } from 'app/common/utils/SafeUnsubscribe';
import { concatMap, mergeAll, mergeMap, Subject, takeUntil } from 'rxjs';
import { FileTypeEnum } from '../../common/enums/file-type-enum';
import { RemoveLayerDialogComponent } from '../remove-layer-dialog/remove-layer-dialog.component';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
})
export class LayerComponent extends SafeUnsubscribe implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  @Input() layer: PreviewLayer;

  errorList: Array<string> = [];

  private _fileList$: Subject<Array<File>> = new Subject<Array<File>>();

  constructor(
    public dialog: MatDialog,
    private layerService: LayerService,
    private notificationService: NotificationService
  ) {
    super();
  }

  ngOnInit(): void {
    this._fileList$
      .pipe(
        concatMap((file: Array<File>) => this.readAllFiles(file)),
        takeUntil(this._ngUnsubscribe)
      )
      .subscribe((newLayerItems) => {
        this.layer.previewLayerItems = [
          ...this.layer.previewLayerItems,
          ...newLayerItems.filter(
            (newLayerItem) => newLayerItem.name !== undefined
          ),
        ];
        if (this.errorList.length > 0) {
          this.notificationService.warning({
            header: 'Those items have incorrect extension and were not added',
            message: this.errorList,
          });
        }
        this.layerService.updatePreviewLayerItems(this.layer);
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

  private readAllFiles(files: Array<File>): Promise<Array<PreviewLayerItem>> {
    this.errorList = [];
    const a: Array<Promise<PreviewLayerItem>> = [];
    files.forEach((file) => {
      a.push(this.readFileAndCreateLayerItem(file));
    });

    return Promise.all(a).then((files) => files);
  }

  private readFileAndCreateLayerItem(file: File): Promise<PreviewLayerItem> {
    return new Promise((resolve) => {
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        if (Object.values(FileTypeEnum).includes(file.type)) {
          resolve({
            base64img: reader.result,
            name: file.name,
            fitnessScore: 50,
            fileType: file.type,
            layerName: this.layer.layerName,
          } as PreviewLayerItem);
        } else {
          this.errorList.push(`Item: ${file.name} has type: ${file.type}`);
          resolve({});
        }
      };
      reader.readAsDataURL(file);
    });
  }
}
