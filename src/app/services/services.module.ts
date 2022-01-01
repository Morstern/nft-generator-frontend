import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayerService } from './upload-section/layer/layer.service';

@NgModule({
  imports: [CommonModule],
  providers: [LayerService],
})
export class ServicesModule {}
