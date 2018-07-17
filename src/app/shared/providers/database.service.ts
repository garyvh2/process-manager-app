import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../app.settings';
import { Subject } from 'rxjs';
import { BaseEntity } from '../../models/interface/BaseEntity';


@Injectable()
export class ConnService {

  constructor (private HTTP: HttpClient) {

  }

  getAll<T extends BaseEntity> (params): Observable<T> {
    return this.HTTP.get<T>(AppSettings.API_LOCATION + params.endpoint);
  }

  find<T extends BaseEntity> (params): Observable<T> {
    return null;
  }

  create<T extends BaseEntity> (params): Observable<T> {
    return this.HTTP.post<T>(AppSettings.API_LOCATION + params.endpoint, params.obj);
  }

  update<T extends BaseEntity> (params): Observable<T> {
    return this.HTTP.put<T>(AppSettings.API_LOCATION + params.endpoint, params.obj);
  }

  delete (params): Observable<any> {
    return this.HTTP.delete(AppSettings.API_LOCATION + params.endpoint);
  }

}
