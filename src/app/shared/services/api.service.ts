import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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

  get(path: string, params: HttpParams = new HttpParams(), headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this._http.get(`${environment.api_url}${path}`, { headers });
  }

  put(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this._http.put(`${environment.api_url}${path}`, body, { headers });
  }

  post(path: string, body: Object = {}, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this._http.post(`${environment.api_url}${path}`, body, { headers })
  }

  delete(path: string, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this._http.delete(`${environment.api_url}${path}`, { headers });
  }
}
