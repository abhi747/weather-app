import { WEATHER_ITEMS } from "./../../assets/data/weather.data";
import { WeatherItem } from "./../interfaces/weather-item";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "../../environments/environment.prod";

@Injectable()
export class WeatherService {
  private OPEN_WEATHER_APPID: string = environment.OPEN_WEATHER_APPID;
  constructor(public http: HttpClient) {}

  handleError(err) {
    alert(err.error.message);
  }

  getWeatherItems(): WeatherItem[] {
    return WEATHER_ITEMS;
  }

  searchWeatherData(cityName: string) {
    let url = `https://api.openweathermap.org/data/2.5/weather`;
    let params = new HttpParams();
    params = params.append("q", cityName);
    params = params.append("APPID", this.OPEN_WEATHER_APPID);
    params = params.append("units", "metric");
    return this.http.get(url, { params });
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }
  removeWeatherItem(index: number) {
    WEATHER_ITEMS.splice(index, 1);
  }
}
