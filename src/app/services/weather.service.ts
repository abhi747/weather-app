import { WEATHER_ITEMS } from './../../assets/data/weather.data';
import { WeatherItem } from './../interfaces/weather-item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherService {
	private OPEN_WEATHER_APPID: string = '00e66b28da5ffe7b45d077a2a6e7b278';
	constructor(public http: HttpClient) { }

	handleError(err) {
		alert(err.error.message);
	}

	getWeatherItems(): WeatherItem[]{
		return WEATHER_ITEMS;
	}


	searchWeatherData(cityName: string){
        let url = `https://api.openweathermap.org/data/2.5/weather`;
        let params = new HttpParams();
        params = params.append('q', cityName);
        params = params.append('APPID', this.OPEN_WEATHER_APPID);
		return this.http.get(url, {params});
	}

	addWeatherItem(weatherItem: WeatherItem){
		WEATHER_ITEMS.push(weatherItem);
	}

}
