import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerPropertiesContainerComponent } from './layer-properties-container.component';

describe('LayerPropertiesContainerComponent', () => {
  let component: LayerPropertiesContainerComponent;
  let fixture: ComponentFixture<LayerPropertiesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerPropertiesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerPropertiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
