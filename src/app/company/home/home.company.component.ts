import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../services/company.service';

@Component({
  templateUrl: 'home.company.component.html',
  styleUrls: ['home.company.component.scss']
})
export class HomeCompanyComponent implements OnInit {
  public companies: any;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit () {
    this.companies = this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
      console.log(this.companies);
    });
  }

  public getArray(length: number): Array<number> {
    return new Array<number>(length);
  }

  public getNoneRate(length: number): Array<number> {
    return new Array<number>(5 - length);
  }
}
