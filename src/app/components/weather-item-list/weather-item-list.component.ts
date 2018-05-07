import { WeatherService } from './../../services/weather.service';
import { WEATHER_ITEMS } from './../../../assets/data/weather.data';
import { WeatherItem } from './../../interfaces/weather-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-item-list',
  templateUrl: './weather-item-list.component.html',
  styleUrls: ['./weather-item-list.component.css']
})
export class WeatherItemListComponent implements OnInit {
  weatherItems: WeatherItem[];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherItems = this.weatherService.getWeatherItems();
  }

}
