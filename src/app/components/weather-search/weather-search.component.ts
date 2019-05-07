import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherItem } from './../../interfaces/weather-item';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

@Component({
	selector: 'app-weather-search',
	templateUrl: './weather-search.component.html',
	styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

	private city: string = '';
	private data: any = {};
	private searchStream = new Subject<string>();

	constructor(private weatherService: WeatherService) { }

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
	onCityChange(){
		if(this.city)
			this.searchStream.next(this.city);
		else
			this.data = {};
	}
	ngOnInit() {
		this.searchStream
		.pipe(
			debounceTime(300),
			distinctUntilChanged(),
			switchMap((input: string) => this.weatherService.searchWeatherData(input)))
			.subscribe(
				(data) => this.data = data,
				(err) => {
					console.error(err);
					this.data = {};
				})
	}

}
