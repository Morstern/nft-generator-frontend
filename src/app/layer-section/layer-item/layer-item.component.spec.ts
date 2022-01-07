import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewLayerItem } from '@common/tos/preview-layer-item';
import { LayerItemComponent } from './layer-item.component';

describe('LayerItemComponent', () => {
  let component: LayerItemComponent;
  let fixture: ComponentFixture<LayerItemComponent>;

  const mockPreviewLayerItem: PreviewLayerItem = {
    base64img: 'costam',
    fitnessScore: 50,
    name: 'test',
    fileType: 'image/png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayerItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.previewLayerItem = mockPreviewLayerItem;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
