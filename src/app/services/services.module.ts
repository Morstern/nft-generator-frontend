import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonsModule } from '@common/commons-module';
import { LayerService } from '@services/common/layer-service/layer.service';
import { NotificationService } from './common/notification-service/notification.service';
import { LayerPropertyService } from './layer-property/layer-property.service';

@NgModule({
  imports: [CommonModule, CommonsModule],
  providers: [LayerService, LayerPropertyService, NotificationService],
})
export class ServicesModule {}
