import { Injectable } from '@angular/core';

@Injectable()
export class JobService {

  constructor() { }

  getJobs_all(){
    return [
      {"id":1, "title":"getJobs_all","city":"Oakland","job_type":"data management","salary":1000,"summary":"Our $1 billion commitment to create more opportunity for everyone. Sundar Pichai, our CEO, recently announced a number of ways Google is working to create more opportunity for everyone, including a 5-year goal to award $1 billion in grants and contribute 1 million employee volunteer hours. Read story  ","duty":"guard","requirement":"diploma"},
      {"id":2, "title":"getJobs_all","city":"Oakland","job_type":"data management","salary":1000,"summary":"Our $1 billion commitment to create more opportunity for everyone. Sundar Pichai, our CEO, recently announced a number of ways Google is working to create more opportunity for everyone, including a 5-year goal to award $1 billion in grants and contribute 1 million employee volunteer hours. Read story ","duty":"guard","requirement":"diploma"},
      {"id":3, "title":"getJobs_all","city":"Oakland","job_type":"data management","salary":1000,"summary":"Our $1 billion commitment to create more opportunity for everyone. Sundar Pichai, our CEO, recently announced a number of ways Google is working to create more opportunity for everyone, including a 5-year goal to award $1 billion in grants and contribute 1 million employee volunteer hours. Read story ","duty":"guard","requirement":"diploma"},
      {"id":4, "title":"getJobs_all","city":"Oakland","job_type":"data management","salary":1000,"summary":"Our $1 billion commitment to create more opportunity for everyone. Sundar Pichai, our CEO, recently announced a number of ways Google is working to create more opportunity for everyone, including a 5-year goal to award $1 billion in grants and contribute 1 million employee volunteer hours. Read story ","duty":"guard","requirement":"diploma"},
      {"id":5, "title":"getJobs_all","city":"Oakland","job_type":"data management","salary":1000,"summary":"Our $1 billion commitment to create more opportunity for everyone. Sundar Pichai, our CEO, recently announced a number of ways Google is working to create more opportunity for everyone, including a 5-year goal to award $1 billion in grants and contribute 1 million employee volunteer hours. Read story ","duty":"guard","requirement":"diploma"},
      {"id":6, "title":"getJobs_all","city":"Oakland","job_type":"data management","salary":1000,"summary":"Our $1 billion commitment to create more opportunity for everyone. Sundar Pichai, our CEO, recently announced a number of ways Google is working to create more opportunity for everyone, including a 5-year goal to award $1 billion in grants and contribute 1 million employee volunteer hours. Read story ","duty":"guard","requirement":"diploma"}
  ];
  }

  getJobs_full(){
    return [
      {"id":1, "title":"getJobs_full","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":2, "title":"getJobs_full","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":3, "title":"getJobs_full","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":4, "title":"getJobs_full","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":5, "title":"getJobs_full","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":6, "title":"getJobs_full","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"}
  ];
  }

  getJobs_part(){
    return [
      {"id":1, "title":"getJobs_part","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":2, "title":"getJobs_part","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":3, "title":"getJobs_part","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":4, "title":"getJobs_part","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":5, "title":"getJobs_part","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":6, "title":"getJobs_part","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"}
  ]
  }
  getJobs_contract(){
    return [
      {"id":1, "title":"getJobs_contract","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":2, "title":"getJobs_contract","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":3, "title":"getJobs_contract","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":4, "title":"getJobs_contract","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":5, "title":"getJobs_contract","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":6, "title":"getJobs_contract","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"}
  ]  
  }
  getJobs_intership(){
    return [
      {"id":1, "title":"getJobs_intership","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":2, "title":"getJobs_intership","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":3, "title":"getJobs_intership","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":4, "title":"getJobs_intership","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":5, "title":"getJobs_intership","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":6, "title":"getJobs_intership","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"}
  ]
  }

  getJobs_freelance(){
    return [
      {"id":1, "title":"freelance","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":2, "title":"freelance","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":3, "title":"freelance","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":4, "title":"freelance","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":5, "title":"freelance","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"},
      {"id":6, "title":"freelance","city":"akland","job_type":"data management","salary":1000,"summary":"this is blue blue","duty":"guard","requirement":"diploma"}
  ]
  }

} 

/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Job } from '../job/job';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JobService {

  private _url : string = '/assets/data/jobs.json';

  constructor(private http: HttpClient) { }


  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>(this._url)
    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }



}
*/