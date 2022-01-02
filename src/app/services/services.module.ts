import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayerService } from './upload-section/layer/layer.service';

@NgModule({
  imports: [CommonModule],
  providers: [LayerService],
})
export class ServicesModule {}
