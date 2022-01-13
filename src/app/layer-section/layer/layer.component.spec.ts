import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayer } from '@common/tos/preview-layer';
import { LayerService } from '@services/common/layer-service/layer.service';
import { RemoveLayerDialogComponent } from '../remove-layer-dialog/remove-layer-dialog.component';
import { LayerComponent } from './layer.component';

describe('LayerComponent', () => {
  let component: LayerComponent;
  let fixture: ComponentFixture<LayerComponent>;

  const layerName = 'Jean Paul II';

  const MOCK_PREVIEW_LAYER = {
    layerName: layerName,
    previewLayerItems: [],
  } as PreviewLayer;

  class MOCK_MAT_DIALOG {
    open(): void {}
  }

  class MOCK_LAYER_SERVICE {
    updateLayer(layer: PreviewLayer): void {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerComponent],
      providers: [
        { provide: MatDialog, useClass: MOCK_MAT_DIALOG },
        { provide: LayerService, useClass: MOCK_LAYER_SERVICE },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerComponent);
    component = fixture.componentInstance;
  });

  it('should create component and render title', () => {
    component.layer = MOCK_PREVIEW_LAYER;

    fixture.detectChanges();

    const layerTitle = fixture.debugElement.nativeElement
      .querySelector('mat-panel-title')
      .textContent.trim();

    expect(component).toBeTruthy();
    expect(layerTitle).toEqual(layerName);
  });

  it('should call open remove dialog on remove layer click', () => {
    const spyOpen = spyOn(component.dialog, 'open');

    component.layer = MOCK_PREVIEW_LAYER;

    fixture.detectChanges();
    const removeLayerButton = fixture.debugElement.nativeElement.querySelector(
      '.layer__delete-button'
    );

    removeLayerButton.click();

    expect(spyOpen).toHaveBeenCalledWith(RemoveLayerDialogComponent, {
      width: '250px',
      data: { layer: MOCK_PREVIEW_LAYER },
    });
  });

  it(`should update layer's layerObjects when one file is selected`, () => {
    //TODO: learn how to test functions inside subscribe, because we do not test if updateLayer was called

    component.layer = MOCK_PREVIEW_LAYER;

    let list = new DataTransfer();
    let file = new File(['content'], 'filename.jpg');
    list.items.add(file);

    let myFileList = list.files;

    fixture.detectChanges();

    component.fileInput.nativeElement.files = myFileList;

    component['_fileList$'].subscribe((element) => {
      expect(element).toContain(file);
    });

    component.onFilesSelected();
  });
});
