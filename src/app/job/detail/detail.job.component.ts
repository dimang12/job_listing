import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component ({
  templateUrl: 'detail.job.component.html'
})

export class DetailJobComponent implements OnInit {

  public id: number;

  constructor(private rout: ActivatedRoute) {
    this.rout.params.subscribe(params => { this.id = params.id; });
  }

  ngOnInit() {

  }
}
