import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  get(path: string, params: HttpParams = new HttpParams()) {
    return this._http.get(`${environment.api_url}${path}`);
  }

  put(path: string, body: Object = {}) {
    return this._http.put(`${environment.api_url}${path}`, body);
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this._http.post(`${environment.api_url}${path}`, body)
  }

  delete(path: string) {
    return this._http.delete(`${environment.api_url}${path}`);
  }
}
