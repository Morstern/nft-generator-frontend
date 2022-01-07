import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { PreviewLayer } from '@common/tos/preview-layer';
import { RemoveLayerDialogComponent } from './remove-layer-dialog.component';

describe('RemoveLayerDialogComponent', () => {
  let component: RemoveLayerDialogComponent;
  let fixture: ComponentFixture<RemoveLayerDialogComponent>;

  const PARAGRAPH_TEXT = 'Are you sure that you want to remove layer named: ';

  const MOCK_MAT_DIALOG_DATA: any = {
    layer: {
      layerName: '2137',
    } as PreviewLayer,
  };

  class MOCK_MAT_DIALOG_REF {
    close(): void {
      //
    }
  }

  class MOCK_LAYER_SERVICE {
    removeLayer(): void {
      //
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveLayerDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: MOCK_MAT_DIALOG_DATA,
        },
        { provide: MatDialogRef, useClass: MOCK_MAT_DIALOG_REF },
        { provide: LayerService, useClass: MOCK_LAYER_SERVICE },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLayerDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render <p> with layerName', () => {
    fixture.detectChanges();
    const paragraph = fixture.debugElement.nativeElement
      .querySelector('p')
      .textContent.trim();

    expect(paragraph).toBe(PARAGRAPH_TEXT.concat('2137'));
  });

  it('should call close on cancel action', () => {
    fixture.detectChanges();
    const spyClose = spyOn(component.dialogRef, 'close');

    const cancelButton = fixture.debugElement.nativeElement.querySelector(
      '.remove-layer-dialog__cancel-button'
    );

    cancelButton.click();

    expect(spyClose).toHaveBeenCalled();
  });

  it('should call close and remove layer on confirm action', () => {
    fixture.detectChanges();

    const spyClose = spyOn(component.dialogRef, 'close');
    const spyRemoveLayer = spyOn(component['layerService'], 'removeLayer');

    const removeButton = fixture.debugElement.nativeElement.querySelector(
      '.remove-layer-dialog__remove-button'
    );

    removeButton.click();

    expect(spyClose).toHaveBeenCalled();
    expect(spyRemoveLayer).toHaveBeenCalled();
  });
});
