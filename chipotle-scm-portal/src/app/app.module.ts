import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommDcoptimalPathComponent } from './comm-dcoptimal-path/comm-dcoptimal-path.component';
import { TruckDeliveryComponent } from './truck-delivery/truck-delivery.component';


@NgModule({
  declarations: [
    AppComponent,
    CommDcoptimalPathComponent,
    TruckDeliveryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
