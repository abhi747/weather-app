import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from './../../interfaces/weather-item';

@Component({
	selector: 'app-weather-search',
	templateUrl: './weather-search.component.html',
	styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
	city: string = '';
	constructor(private weatherService: WeatherService) { }

	ngOnInit() {

	}
	onSubmit(){
		this.weatherService.searchWeatherData(this.city).subscribe(
			data => {
				const weatherItem: WeatherItem = {
					'cityName': data['name'],
					'description': data['weather'][0].description,
					'temperature': data['main'].temp
				}
			}
		)
	}

}
