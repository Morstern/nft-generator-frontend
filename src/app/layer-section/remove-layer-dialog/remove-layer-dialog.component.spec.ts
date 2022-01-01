import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLayerDialogComponent } from './remove-layer-dialog.component';

describe('RemoveLayerDialogComponent', () => {
  let component: RemoveLayerDialogComponent;
  let fixture: ComponentFixture<RemoveLayerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLayerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
