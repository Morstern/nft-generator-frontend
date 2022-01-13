import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { RemoveLayerItemDialogComponent } from '../remove-layer-item-dialog/remove-layer-item-dialog.component';
import { LayerItemComponent } from './layer-item.component';

describe('LayerItemComponent', () => {
  let component: LayerItemComponent;
  let fixture: ComponentFixture<LayerItemComponent>;

  const MOCK_PREVIEW_LAYER_ITEM: PreviewLayerItem = {
    base64img: 'costam',
    fitnessScore: 50,
    name: 'test',
    fileType: 'image/png',
    layerName: 'test-layer-name',
  };

  class MOCK_MAT_DIALOG {
    open(): void {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerItemComponent],
      providers: [{ provide: MatDialog, useClass: MOCK_MAT_DIALOG }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.previewLayerItem = MOCK_PREVIEW_LAYER_ITEM;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should open remove layer item', () => {
    const spyOpen = spyOn(component.dialog, 'open');

    component.previewLayerItem = MOCK_PREVIEW_LAYER_ITEM;
    fixture.detectChanges();
    const removeLayerItemButton =
      fixture.debugElement.nativeElement.querySelector(
        '.layer-item__delete-item-button'
      );

    removeLayerItemButton.click();

    expect(spyOpen).toHaveBeenCalledWith(RemoveLayerItemDialogComponent, {
      width: '250px',
      data: { previewLayerItem: MOCK_PREVIEW_LAYER_ITEM },
    });
  });
});
