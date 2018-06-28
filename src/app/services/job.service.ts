import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {JobModel} from '../models/job.model';


@Injectable()
export class JobService {
  private url = 'http://localhost:8081/jobs/all';

  constructor(private httpClient: HttpClient) {}

  public getAllJobs(): Observable<JobModel[]> {
    return this.httpClient.get(this.url).map(res => {
      const jobs = new Array<JobModel>();
      for (const r of res){
        jobs.push(new JobModel(
          r.id, r.title, r.city_id, r.job_type, r.salary,
          r.summary, r.duty, r.requirement, r.company_id,
          r.companyModel, r.cityModel
        ));
      }
      return jobs;
    });
  }
}
