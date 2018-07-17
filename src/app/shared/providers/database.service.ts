import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../app.settings';
import { Subject } from 'rxjs';


@Injectable()
export class ConnService {

  constructor (private HTTP: HttpClient) {

  }

  getAll (params): Observable<any> {
    return this.HTTP.get(AppSettings.API_LOCATION + params.endpoint);
  }

  find (params): Observable<any> {
    return null;
  }

  create (params): Observable<any> {
    return this.HTTP.post(AppSettings.API_LOCATION + params.endpoint, params.obj);
  }

  update (params): Observable<any> {
    return this.HTTP.put(AppSettings.API_LOCATION + params.endpoint, params.obj);
  }

  delete (params): Observable<any> {
    return this.HTTP.delete(AppSettings.API_LOCATION + params.endpoint);
  }

}
