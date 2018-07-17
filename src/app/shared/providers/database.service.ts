import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../../app.settings';
import { Subject } from 'rxjs';


@Injectable()
export class ConnService {

  constructor (private HTTP: HttpClient) {

  }

  getAll (type): Observable<any> {
    return this.HTTP.get(AppSettings.API_LOCATION + type);
  }

  find (type) {
    return this.HTTP.get(AppSettings.API_LOCATION + type);

  }

  create () {

  }

  update () {

  }

  delete () {

  }

}
