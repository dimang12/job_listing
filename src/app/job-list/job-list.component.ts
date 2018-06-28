import {Component, Input, OnInit} from '@angular/core';
import {JobModel} from '../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  @Input()
  public jobs: JobModel[];

  constructor() { }

  ngOnInit() {
  }

}
