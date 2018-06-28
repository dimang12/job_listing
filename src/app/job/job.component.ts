import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import {JobModel} from '../models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  // public jobs: any;
  public jobs: JobModel[];
  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getAllJobs().subscribe( data => this.jobs = data );
  }
}
