import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayerService } from '@services/common/layer-service/layer.service';
import { LayerPropertyService } from './layer-property/layer-property.service';

@NgModule({
  imports: [CommonModule],
  providers: [LayerService, LayerPropertyService],
})
export class ServicesModule {}
