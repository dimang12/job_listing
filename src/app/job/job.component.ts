import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  
 public switch ="all_kind_n_all_level";

  public jobList = [
    {"jobTitle":"Digital/Web designer","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
    {"jobTitle":"Software Develop Intern","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
    {"jobTitle":"IT Support Specialist","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
    {"jobTitle":"AppleCare Support","jobType":"AVB Marketing","location":"Sacramento, CA","detail":"Bachelors degree in web/graphic design or equivalent 3 years of experience in a web graphics design environment. No phone call please..","keyWord":"Photo shop Illustrator HTML"},
  ]

  constructor() {
   }

  ngOnInit() {
  }

   Klick(event){
     console.log(event.value);
   }
}
