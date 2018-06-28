import { Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  // selector: 'list-location-list',
  templateUrl: './list/list.location.component.html',
  styleUrls: ['./location.component.scss']
})

export class JoblistLocaitonComponent implements OnInit {

  public filterList = [
    {id: 1, title: 'All kind of jobs'},
    {id: 2, title: 'Full-time jobs'},
    {id: 3, title: 'Part-time jobs'},
    {id: 4, title: 'Contract'},
    {id: 5, title: 'Internship'},
    {id: 6, title: 'Freelancer'}
    ];

  public curSelected= 1;
  public cityId: number;
  public jobs: Object;
  private url= 'http://localhost:8081/jobs/city';

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe(params => this.cityId = params.id);
  }

  ngOnInit() {
    this.httpClient
      .get(this.url + '/' + this.cityId)
      .subscribe(data => {
        this.jobs = data;
      })
    ;
  }

  public activeFilter() {

  }
}
