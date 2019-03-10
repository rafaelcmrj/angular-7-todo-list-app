import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskRequest, ListTasksRequest } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _applicatinID: string;
  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService;
  }

  insert(body: Object = {}): Observable<TaskRequest> {
    return this._apiService.post('/tasks', body, this._applicationHeader());
  }

  listAll(): Observable<ListTasksRequest> {
    return this._apiService.get('/tasks', new HttpParams(), this._applicationHeader());
  }

  delete(id: number): Observable<TaskRequest> {
    return this._apiService.delete(`/tasks/${id}`, this._applicationHeader());
  }

  update(id: number, body: Object = {}): Observable<TaskRequest> {
    return this._apiService.put(`/tasks/${id}`, body, this._applicationHeader());
  }

  private _applicationHeader() {
    return new HttpHeaders({
      'Application-ID': this._applicatinID
    })
  }

  set applicationID(applicationID: string) {
    this._applicatinID = applicationID;
  }
}
