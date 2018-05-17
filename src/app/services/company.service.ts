import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {
  private url = 'http://localhost:8081/companies/';
  private jobUrl = 'http://localhost:8081/jobs/company/';

  constructor( private httpClient: HttpClient) { }

  public getAllCompanies(): Observable<any> {
    return this.httpClient.get(this.url + 'all');
  }

  public getJobsByCompany(id) {
    return this.httpClient.get(this.jobUrl + '/' + id);
  }
}
