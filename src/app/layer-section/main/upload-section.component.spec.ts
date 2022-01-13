import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayer } from '@common/tos/preview-layer';
import { LayerService } from '@services/common/layer-service/layer.service';
import { Observable, of } from 'rxjs';
import { AddLayerDialogComponent } from '../add-layer-dialog/add-layer-dialog.component';
import { UploadSectionComponent } from './upload-section.component';

describe('UploadSectionComponent', () => {
  let component: UploadSectionComponent;
  let fixture: ComponentFixture<UploadSectionComponent>;

  const MOCK_PREVIEW_LAYERS: Array<PreviewLayer> = [
    { layerName: 'xD', previewLayerItems: [] },
    { layerName: 'xD2', previewLayerItems: [] },
  ];
  const MOCK_PREVIEW_LAYERS_AFTER_MOVE: Array<PreviewLayer> = [
    { layerName: 'xD2', previewLayerItems: [] },
    { layerName: 'xD', previewLayerItems: [] },
  ];

  class MOCK_MAT_DIALOG {
    open(): void {}
  }

  class MOCK_LAYER_SERVICE {
    get layers$(): Observable<Array<PreviewLayer>> {
      return of(MOCK_PREVIEW_LAYERS);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadSectionComponent],
      providers: [
        { provide: MatDialog, useClass: MOCK_MAT_DIALOG },
        { provide: LayerService, useClass: MOCK_LAYER_SERVICE },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render three layers', () => {
    fixture.detectChanges();

    const layerNames =
      fixture.debugElement.nativeElement.querySelectorAll('app-layer');

    expect(layerNames.length).toBe(2);
  });

  it('should open add layer dialog', () => {
    const spyOpen = spyOn(component.dialog, 'open');

    fixture.detectChanges();
    const addLayerButton = fixture.debugElement.nativeElement.querySelector(
      '.upload-section__add-layer-button > button'
    );

    addLayerButton.click();

    expect(spyOpen).toHaveBeenCalledWith(AddLayerDialogComponent, {
      width: '250px',
      data: { layers: MOCK_PREVIEW_LAYERS },
    });
  });

  it('should send pictures to the backend', () => {
    const spyLog = spyOn(console, 'log');
    component.sendPicturesToBackend();
    expect(spyLog).toHaveBeenCalled();
  });

  it('should move item when indexes changes after drop', () => {
    fixture.detectChanges();

    const fromIndex = 0;
    const toIndex = 1;

    const container: any = { id: 'containerId', data: component.layers };
    const event = {
      previousIndex: fromIndex,
      currentIndex: toIndex,
      container: <CdkDropList<Array<PreviewLayer>>>container,
      previousContainer: <CdkDropList<Array<PreviewLayer>>>container,
      item: <CdkDrag<PreviewLayer>>{ data: component.layers[fromIndex] },
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 },
    } as CdkDragDrop<PreviewLayer[], PreviewLayer[]>;

    component.drop(event);

    expect(component.layers).toEqual(MOCK_PREVIEW_LAYERS_AFTER_MOVE);
  });

  it('should not move item when indexes does not change after drop', () => {
    fixture.detectChanges();

    const fromIndex = 0;
    const toIndex = 0;

    const container: any = { id: 'containerId', data: component.layers };
    const event = {
      previousIndex: fromIndex,
      currentIndex: toIndex,
      container: <CdkDropList<Array<PreviewLayer>>>container,
      previousContainer: <CdkDropList<Array<PreviewLayer>>>container,
      item: <CdkDrag<PreviewLayer>>{ data: component.layers[fromIndex] },
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 },
    } as CdkDragDrop<PreviewLayer[], PreviewLayer[]>;

    component.drop(event);

    expect(component.layers).toEqual(MOCK_PREVIEW_LAYERS);
  });
});
