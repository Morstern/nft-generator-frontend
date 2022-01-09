import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '@common/angular-material.module';
import { MainSectionComponent } from './main-section/main-section.component';



@NgModule({
  declarations: [
    MainSectionComponent
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
