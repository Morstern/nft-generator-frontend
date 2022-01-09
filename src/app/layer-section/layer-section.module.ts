import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@common/angular-material.module';
import { AddLayerDialogComponent } from './add-layer-dialog/add-layer-dialog.component';
import { LayerComponent } from './layer/layer.component';
import { UploadSectionComponent } from './main/upload-section.component';
import { RemoveLayerDialogComponent } from './remove-layer-dialog/remove-layer-dialog.component';
import { LayerItemComponent } from './layer-item/layer-item.component';

@NgModule({
  declarations: [
    UploadSectionComponent,
    AddLayerDialogComponent,
    LayerComponent,
    RemoveLayerDialogComponent,
    LayerItemComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [UploadSectionComponent],
})
export class LayerSectionModule {}
