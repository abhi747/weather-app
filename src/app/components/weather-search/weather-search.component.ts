import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from './../../interfaces/weather-item';
import 'rxjs';

@Component({
	selector: 'app-weather-search',
	templateUrl: './weather-search.component.html',
	styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
	city: string = '';
	constructor(private weatherService: WeatherService) { }

	ngOnInit() {}

	onSubmit(){
		var response = this.weatherService.searchWeatherData(this.city).subscribe(
			(response) => {
				const weatherItem: WeatherItem = {
					'cityName': response['name'],
					'description': response['weather'][0].description,
					'temperature': response['main'].temp
				}
				this.weatherService.addWeatherItem(weatherItem);
			},
			(error) => this.weatherService.handleError(error)
		);
	}

}
