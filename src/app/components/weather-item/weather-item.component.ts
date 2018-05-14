import { WeatherItem } from './../../interfaces/weather-item';
import { Component, OnInit, Input } from '@angular/core';
import { WEATHER_ITEMS } from '../../../assets/data/weather.data';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

   @Input('weatherItem') weatherItem: WeatherItem;
   @Input('weatherItemIndex') index: number;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  
  removeWeatherItem(index: number){
    this.weatherService.removeWeatherItem(index);
  }
}
