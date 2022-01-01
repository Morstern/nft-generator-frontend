import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LayerService } from '@services/upload-section/layer/layer.service';
import { Layer } from 'app/common/tos/layer';

import { AddLayerDialogComponent } from './add-layer-dialog.component';

describe('AddLayerDialogComponent', () => {
  let component: AddLayerDialogComponent;
  let fixture: ComponentFixture<AddLayerDialogComponent>;

  const MOCK_MAT_DIALOG_DATA: any = {
    layers: [
      {
        layerName: '2137',
      } as Layer,
    ],
  };

  class MOCK_MAT_DIALOG_REF {
    close(): void {
      //
    }
  }

  class MOCK_LAYER_SERVICE {
    set layers(layer: Layer) {
      //
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLayerDialogComponent],
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
    fixture = TestBed.createComponent(AddLayerDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render input field', () => {
    fixture.detectChanges();
    const inputField =
      fixture.debugElement.nativeElement.querySelector('input');

    expect(inputField).not.toBeUndefined();
  });

  it('should close on cancel', () => {
    fixture.detectChanges();
    const spyClose = spyOn(component.dialogRef, 'close');

    const cancelButton = fixture.debugElement.nativeElement.querySelector(
      '.add-layer-dialog__cancel-button'
    );

    cancelButton.click();

    expect(spyClose).toHaveBeenCalled();
  });

  it('should call close and set layer on confirm', () => {
    fixture.detectChanges();

    const spyClose = spyOn(component.dialogRef, 'close');
    const spySetLayers = spyOnProperty(
      component['layerService'],
      'layers',
      'set'
    );

    const removeButton = fixture.debugElement.nativeElement.querySelector(
      '.add-layer-dialog__add-button'
    );

    removeButton.click();

    expect(spyClose).toHaveBeenCalled();
    expect(spySetLayers).toHaveBeenCalled();
  });
});
