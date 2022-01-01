import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadSectionComponent } from './main/upload-section.component';
import { AddLayerDialogComponent } from './add-layer-dialog/add-layer-dialog.component';
import { AngularMaterialModule } from '../common/angular-material.module';
import { FormsModule } from '@angular/forms';
import { LayerComponent } from './layer/layer.component';
import { RemoveLayerDialogComponent } from './remove-layer-dialog/remove-layer-dialog.component';

@NgModule({
  declarations: [UploadSectionComponent, AddLayerDialogComponent, LayerComponent, RemoveLayerDialogComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  exports: [UploadSectionComponent],
})
export class LayerSectionModule {}
