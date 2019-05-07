import { WEATHER_ITEMS } from "./../../assets/data/weather.data";
import { WeatherItem } from "./../interfaces/weather-item";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable()
export class WeatherService {
  private OPEN_WEATHER_APPID: string = environment.OPEN_WEATHER_APPID;
  constructor(public http: HttpClient) {}

  handleError(err: HttpErrorResponse) {
    alert(err.error.message);
    return throwError(err.message || 'Server error');
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
    return this.http.get(url, { params }).
      catch(this.handleError);
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }
  removeWeatherItem(index: number) {
    WEATHER_ITEMS.splice(index, 1);
  }
}
