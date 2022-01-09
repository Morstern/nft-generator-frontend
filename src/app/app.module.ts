import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '@services/services.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './common/commons-module';
import { LayerSectionModule } from './layer-section/layer-section.module';
import { MainSectionModule } from './main-section/main-section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayerSectionModule,
    MainSectionModule,
    ServicesModule,
    CommonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
