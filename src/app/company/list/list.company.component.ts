import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'list.company.component.html',
  styleUrls: []
})
export class ListCompanyComponent implements OnInit {
  public companyId;
  public jobs: Object;
  constructor (private route: ActivatedRoute, private companyService: CompanyService) {
    this.route.params.subscribe(params => { this.companyId = params.id; });
  }

  ngOnInit () {
    this.companyService.getJobsByCompany(this.companyId).subscribe( data => {
      this.jobs = data;
    });
  }

}
