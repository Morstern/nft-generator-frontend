import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { Layer } from 'app/common/tos/layer';
import { Observable, of } from 'rxjs';
import { AddLayerDialogComponent } from '../add-layer-dialog/add-layer-dialog.component';
import { UploadSectionComponent } from './upload-section.component';

describe('UploadSectionComponent', () => {
  let component: UploadSectionComponent;
  let fixture: ComponentFixture<UploadSectionComponent>;

  const mockLayers: Array<Layer> = [
    { layerName: 'xD', layerObjects: [] },
    { layerName: 'xD2', layerObjects: [] },
  ];
  const mockLayersAfterMove: Array<Layer> = [
    { layerName: 'xD2', layerObjects: [] },
    { layerName: 'xD', layerObjects: [] },
  ];

  class MOCK_MAT_DIALOG {
    open(): void {
      //
    }
  }

  class MOCK_LAYER_SERVICE {
    get layers$(): Observable<Array<Layer>> {
      return of(mockLayers);
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
      data: { layers: mockLayers },
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
      container: <CdkDropList<Array<Layer>>>container,
      previousContainer: <CdkDropList<Array<Layer>>>container,
      item: <CdkDrag<Layer>>{ data: component.layers[fromIndex] },
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 },
    } as CdkDragDrop<Layer[], Layer[]>;

    component.drop(event);

    expect(component.layers).toEqual(mockLayersAfterMove);
  });

  it('should not move item when indexes does not change after drop', () => {
    fixture.detectChanges();

    const fromIndex = 0;
    const toIndex = 0;

    const container: any = { id: 'containerId', data: component.layers };
    const event = {
      previousIndex: fromIndex,
      currentIndex: toIndex,
      container: <CdkDropList<Array<Layer>>>container,
      previousContainer: <CdkDropList<Array<Layer>>>container,
      item: <CdkDrag<Layer>>{ data: component.layers[fromIndex] },
      isPointerOverContainer: true,
      distance: { x: 0, y: 0 },
    } as CdkDragDrop<Layer[], Layer[]>;

    component.drop(event);

    expect(component.layers).toEqual(mockLayers);
  });
});
