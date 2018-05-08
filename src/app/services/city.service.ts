import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CityService {

  private url = 'http://localhost:8081/location/cities/';
  constructor(private httpClient: HttpClient) { }

  public getAllCities(): Observable<any> {
    return this.httpClient.get(this.url + 'all');
  }

}
