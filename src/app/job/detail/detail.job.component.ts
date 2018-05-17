import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JobsService} from '../../services/jobs.service';


@Component ({
  templateUrl: 'detail.job.component.html',
  styleUrls: ['detail.job.component.scss']
})

export class DetailJobComponent implements OnInit {

  public id: number;
  public detail: any;

  constructor(private rout: ActivatedRoute, private jobsService: JobsService) {
    this.rout.params.subscribe(params => { this.id = params.id; });

  }

  ngOnInit() {
    this.detail = this.jobsService.getJobDetail(this.id).subscribe(data => {
      this.detail = data;
    });
  }
}
