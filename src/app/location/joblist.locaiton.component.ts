import { Component, OnInit} from '@angular/core';

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

  ngOnInit() {

  }

  public activeFilter(){

  }
}
