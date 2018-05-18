import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExportVolumeComponent } from './export-volume/export-volume.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [
    AppComponent,
    ExportVolumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ButtonGroupModule,
    DropDownsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
