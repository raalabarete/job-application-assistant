import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { WeatherForecastModel } from '../models/weather-forecast.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getForecast(): Observable<WeatherForecastModel[]> {
    return this.http.get<WeatherForecastModel[]>(`${this.baseUrl}/weatherforecast`);
  }
}
