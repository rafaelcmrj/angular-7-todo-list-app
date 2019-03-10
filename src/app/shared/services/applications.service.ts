import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ApplicationRequest } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService;
  }

  getApplicationId(body: Object = {}): Observable<ApplicationRequest> {
    return this._apiService.post('/applications', body);
  }
}
