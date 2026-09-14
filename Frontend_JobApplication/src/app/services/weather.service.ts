import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(`${this.baseUrl}/weatherforecast`);
  }
}
