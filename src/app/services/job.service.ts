/*import { Injectable } from '@angular/core';

@Injectable()
export class JobService {

  constructor() { }

  getJobs(){
    return[
      {"jobTitle":"Digital/Web designer","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
      {"jobTitle":"Software Develop Intern","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
      {"jobTitle":"IT Support Specialist","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
      {"jobTitle":"AppleCare Support","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
    ];
  }

  getJobs_all(){
    return[
      {"jobTitle":"IT Support Specialist","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
      {"jobTitle":"AppleCare Support","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
    ]
  }

} */


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Job } from '../job';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JobService {

  private _url = 'http://localhost:8081/jobs/all';

  constructor(private http: HttpClient) { }


  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this._url)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }



}
