import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherItemListComponent } from './components/weather-item-list/weather-item-list.component';
import { WeatherService } from './services/weather.service';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherItemListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
