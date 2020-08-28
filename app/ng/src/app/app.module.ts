import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {CommonAppModule} from "./module/common.module";
import {PriceFormatterPipe} from "./module/pipes/price-formtter/price-formatter.pipe";
import {CarOrderCard} from "./module/components/common/car-order-card/car-order-card";

@NgModule({
  declarations: [
    AppComponent,
    PriceFormatterPipe,
    CarOrderCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonAppModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
