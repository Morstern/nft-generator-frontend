import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonsModule } from '@common/commons-module';
import { AddLayerDialogComponent } from './add-layer-dialog/add-layer-dialog.component';
import { LayerItemComponent } from './layer-item/layer-item.component';
import { LayerComponent } from './layer/layer.component';
import { UploadSectionComponent } from './main/upload-section.component';
import { RemoveLayerDialogComponent } from './remove-layer-dialog/remove-layer-dialog.component';
import { RemoveLayerItemDialogComponent } from './remove-layer-item-dialog/remove-layer-item-dialog.component';

@NgModule({
  declarations: [
    UploadSectionComponent,
    AddLayerDialogComponent,
    LayerComponent,
    RemoveLayerDialogComponent,
    LayerItemComponent,
    RemoveLayerItemDialogComponent,
  ],
  imports: [CommonModule, CommonsModule, FormsModule],
  exports: [UploadSectionComponent],
})
export class LayerSectionModule {}
