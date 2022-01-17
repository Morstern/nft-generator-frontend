import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayerService } from '@services/common/layer-service/layer.service';
import { of } from 'rxjs';
import { LayerPropertiesContainerComponent } from './layer-properties-container.component';

describe('LayerPropertiesContainerComponent', () => {
  let component: LayerPropertiesContainerComponent;
  let fixture: ComponentFixture<LayerPropertiesContainerComponent>;

  class MOCK_LAYER_SERVICE {
    get layers$() {
      return of();
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: LayerService, useClass: MOCK_LAYER_SERVICE }],
      declarations: [LayerPropertiesContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerPropertiesContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch layers on init', () => {
    const spyOnLayers = spyOnProperty(
      component['layerService'],
      'layers$',
      'get'
    ).and.returnValue(of());

    fixture.detectChanges();

    expect(spyOnLayers).toHaveBeenCalled();
  });
});
