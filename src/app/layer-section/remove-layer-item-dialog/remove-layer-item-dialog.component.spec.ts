import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { LayerService } from '@services/common/layer-service/layer.service';
import { NotificationService } from '@services/common/notification-service/notification.service';
import { RemoveLayerItemDialogComponent } from './remove-layer-item-dialog.component';

describe('RemoveLayerItemDialogComponent', () => {
  let component: RemoveLayerItemDialogComponent;
  let fixture: ComponentFixture<RemoveLayerItemDialogComponent>;

  const MOCK_PREVIEW_LAYER_ITEM: PreviewLayerItem = {
    base64img: 'costam',
    fitnessScore: 50,
    name: 'test',
    fileType: 'image/png',
    layerName: 'test-layer-name',
  };

  const MOCK_MAT_DIALOG_DATA: any = {
    previewLayerItem: MOCK_PREVIEW_LAYER_ITEM,
  };

  class MOCK_MAT_DIALOG_REF {
    close(): void {}
  }

  class MOCK_LAYER_SERVICE {
    removePreviewLayerItem(): void {}
  }

  class MOCK_NOTIFICATION_SERVICE {
    success(): void {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveLayerItemDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: MOCK_MAT_DIALOG_DATA },
        { provide: MatDialogRef, useClass: MOCK_MAT_DIALOG_REF },
        { provide: LayerService, useClass: MOCK_LAYER_SERVICE },
        { provide: NotificationService, useClass: MOCK_NOTIFICATION_SERVICE },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLayerItemDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should close dialog on cancel-button click', () => {
    const spyClose = spyOn(component['dialogRef'], 'close');
    const spyRemovePreviewLayerItem = spyOn(
      component['layerService'],
      'removePreviewLayerItem'
    );
    const spySuccess = spyOn(component['notificationService'], 'success');

    fixture.detectChanges();
    const removeLayerItemButton =
      fixture.debugElement.nativeElement.querySelector(
        '.remove-layer-item-dialog__cancel-button'
      );

    removeLayerItemButton.click();

    expect(spyClose).toHaveBeenCalled();
    expect(spyRemovePreviewLayerItem).not.toHaveBeenCalled();
    expect(spySuccess).not.toHaveBeenCalled();
  });

  it('should close dialog, notify success and removePreviewLayerItem on remove-button', () => {
    const spyClose = spyOn(component['dialogRef'], 'close');
    const spyRemovePreviewLayerItem = spyOn(
      component['layerService'],
      'removePreviewLayerItem'
    );
    const spySuccess = spyOn(component['notificationService'], 'success');

    fixture.detectChanges();
    const removeLayerItemButton =
      fixture.debugElement.nativeElement.querySelector(
        '.remove-layer-item-dialog__remove-button'
      );

    removeLayerItemButton.click();

    expect(spyClose).toHaveBeenCalled();
    expect(spyRemovePreviewLayerItem).toHaveBeenCalled();
    expect(spySuccess).toHaveBeenCalled();
  });
});
