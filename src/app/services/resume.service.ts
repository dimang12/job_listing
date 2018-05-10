import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ResumeModel} from '../models/resume.model';


@Injectable()
export class ResumeService {
  public url = 'http://localhost:8080/account/resume/all';
  public results = [];
  constructor(private httpClient: HttpClient) { }

  public getResume(): Observable<any> {
    return this.httpClient.get( this.url ).map(obj => {
      return obj;
    });
  }

}
