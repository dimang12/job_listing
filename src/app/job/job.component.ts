import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {

  public all_kind_of_job="test"; 
  
  public switch ="all_kind_n_all_level";
  
  public value_a="a";
  public value_b="b";
  public value_c="c";
  public value_d="d";
  public value_e="e";
  public value_f="f";

  public value_1="1";
  public value_2="2";
  public value_3="3";
  public value_4="4";
  public value_5="5";
  public value_6="6";
  public value_7="7";
  public value_8="8";

  public errorMsg;
  

  public jobList = [];

  constructor(private _jobService: JobService) {
   }

  ngOnInit() {
    //this.jobList = this._jobService.getJobs();
    
     this._jobService.getJobs()
    .subscribe(data => this.jobList = data,
    error=>this.errorMsg = error);
    
    
  }

  KlickJob(value){
        
    if(value == 1){
    console.log(value);
    this._jobService.getJobs();
    }
  }

   Klick(event){
     console.log(event.value);
   }
}
