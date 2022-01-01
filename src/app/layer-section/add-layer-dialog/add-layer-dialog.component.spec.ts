import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLayerDialogComponent } from './add-layer-dialog.component';

describe('AddLayerDialogComponent', () => {
  let component: AddLayerDialogComponent;
  let fixture: ComponentFixture<AddLayerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLayerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLayerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
