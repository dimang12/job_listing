import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JobsService {
  private url = 'http://localhost:8081/jobs/';

  constructor(private httpClient: HttpClient) { }

  public getJobDetail(id: number): Observable<any> {
    return this.httpClient.get(this.url + 'detail/' + id);
  }

}
