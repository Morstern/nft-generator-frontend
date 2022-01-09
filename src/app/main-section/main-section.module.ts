import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@common/angular-material.module';
import { MainSectionComponent } from './main-section/main-section.component';
import { LayerPropertiesComponent } from './layer-properties/layer-properties.component';



@NgModule({
  declarations: [
    MainSectionComponent,
    LayerPropertiesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    MainSectionComponent
  ]
})
export class MainSectionModule { }
