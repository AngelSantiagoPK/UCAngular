import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    // Angular Modules
    BrowserModule,
    CommonModule,
    // Custom Modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}