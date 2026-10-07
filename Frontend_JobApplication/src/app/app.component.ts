import { Component, OnInit, inject } from '@angular/core';

import { WeatherForecastModel } from './models/weather-forecast.model';
import { WeatherService } from './services/weather.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Frontend_JobApplication';

  private readonly weatherService = inject(WeatherService);

  forecasts: WeatherForecastModel[] = [];
  error: string | null = null;

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe({
      next: (data) => (this.forecasts = data),
      error: () => (this.error = 'Could not reach the Backend_JobApplication API.')
    });
  }
}
