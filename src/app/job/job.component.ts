import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {

  
  public trigger="";
  public messageShow="";

  public all_kind_of_job="test"; 
  
  public switch ="all_kind_n_all_level";
  
  public value_a="a";
  public value_b="b";
  public value_c="c";
  public value_d="d";
  public value_e="e";
  public value_f="f";

  public value_1=1;
  public value_2=2;
  public value_3=3;
  public value_4=4;
  public value_5=5;
  public value_6=6;
  public value_7=7;
  public value_8=8;

  public errorMsg;
  
  public jobList = [];
  public allJobList="aa";

  
  KlickJob(value){
        

//all kind of jobs
    if(value == 'a'){
      this.trigger=value;
//      this.jobList= this._jobService.getJobs_all();
     // switch = "all_kind_n_all_level";
     // this._jobService.getJobs_all();
    }

//full time jobs
    if(value == 'b'){
      this.trigger=value;
 //     this.jobList = this._jobService.getJobs_full();
    }

//part time jobs
    if(value == 'c'){
      this.trigger=value;
 //     this.jobList = this._jobService.getJobs_part();
    }

//contract
    if(value == 'd'){
      this.trigger=value;
 //     this.jobList = this._jobService.getJobs_contract();
    }

//intership
    if(value == 'e'){
      this.trigger=value;
//      this.jobList = this._jobService.getJobs_intership();
    }

//freelance
    if(value == 'f'){
      this.trigger=value;
  //    this.jobList = this._jobService.getJobs_freelance();
    }

//all levels
    if(value == 1){
      if(value==1 && this.trigger=="a"){
        this.messageShow="inside 1 and inside a";
      }
      if(value==1 && this.trigger=="b"){
        this.messageShow="inside 1 and inside b";
      }
      if(value==1 && this.trigger=="c"){
        this.messageShow="inside 1 and inside c";
      }
      if(value==1 && this.trigger=="d"){
        this.messageShow="inside 1 and inside d";
      }
      if(value==1 && this.trigger=="e"){
        this.messageShow="inside 1 and inside e";
      }
      if(value==1 && this.trigger=="f"){
        this.messageShow="inside 1 and inside f";
      }
      }

//Entry levels
    if(value == 2){
      if(value==2 && this.trigger=="a"){
        this.messageShow="inside 2 and inside a";
      }
      if(value==2 && this.trigger=="b"){
        this.messageShow="inside 2 and inside b";
      }
      if(value==2 && this.trigger=="c"){
        this.messageShow="inside 2 and inside c";
      }
      if(value==2 && this.trigger=="d"){
        this.messageShow="inside 2 and inside d";
      }
      if(value==2 && this.trigger=="e"){
        this.messageShow="inside 2 and inside e";
      }
      if(value==2 && this.trigger=="f"){
        this.messageShow="inside 2 and inside f";
      }
    }

//Junior Level
    if(value == 3){
      if(value==3 && this.trigger=="a"){
        this.messageShow="inside 3 and inside a";
      }
      if(value==3 && this.trigger=="b"){
        this.messageShow="inside 3 and inside b";
      }
      if(value==3 && this.trigger=="c"){
        this.messageShow="inside 3 and inside c";
      }
      if(value==3 && this.trigger=="d"){
        this.messageShow="inside 3 and inside d";
      }
      if(value==3 && this.trigger=="e"){
        this.messageShow="inside 3 and inside e";
      }
      if(value==3 && this.trigger=="f"){
        this.messageShow="inside 3 and inside f";
      }
    }

//Senior Level
    if(value == 4){
      if(value==4 && this.trigger=="a"){
        this.messageShow="inside 4 and inside a";
      }
      if(value==4 && this.trigger=="b"){
        this.messageShow="inside 4 and inside b";
      }
      if(value==4 && this.trigger=="c"){
        this.messageShow="inside 4 and inside c";
      }
      if(value==4 && this.trigger=="d"){
        this.messageShow="inside 4 and inside d";
      }
      if(value==4 && this.trigger=="e"){
        this.messageShow="inside 4 and inside e";
      }
      if(value==4 && this.trigger=="f"){
        this.messageShow="inside 4 and inside f";
      }
      
    }

//Leader
    if(value == 5){
      if(value==5 && this.trigger=="a"){
        this.messageShow="inside 5 and inside a";
      }
      if(value==5 && this.trigger=="b"){
        this.messageShow="inside 5 and inside b";
      }
      if(value==5 && this.trigger=="c"){
        this.messageShow="inside 5 and inside c";
      }
      if(value==5 && this.trigger=="d"){
        this.messageShow="inside 5 and inside d";
      }
      if(value==5 && this.trigger=="e"){
        this.messageShow="inside 5 and inside e";
      }
      if(value==5 && this.trigger=="f"){
        this.messageShow="inside 5 and inside f";
      }
    }

//Supervisor
    if(value == 6){
      if(value==6 && this.trigger=="a"){
        this.messageShow="inside 6 and inside a";
      }
      if(value==6 && this.trigger=="b"){
        this.messageShow="inside 6 and inside b";
      }
      if(value==6 && this.trigger=="c"){
        this.messageShow="inside 6 and inside c";
      }
      if(value==6 && this.trigger=="d"){
        this.messageShow="inside 6 and inside d";
      }
      if(value==6 && this.trigger=="e"){
        this.messageShow="inside 6 and inside e";
      }
      if(value==6 && this.trigger=="f"){
        this.messageShow="inside 6 and inside f";
      }
    }

//Manager
    if(value == 7){
      if(value==7 && this.trigger=="a"){
        this.messageShow="inside 7 and inside a";
      }
      if(value==7 && this.trigger=="b"){
        this.messageShow="inside 7 and inside b";
      }
      if(value==7 && this.trigger=="c"){
        this.messageShow="inside 7 and inside c";
      }
      if(value==7 && this.trigger=="d"){
        this.messageShow="inside 7 and inside d";
      }
      if(value==7 && this.trigger=="e"){
        this.messageShow="inside 7 and inside e";
      }
      if(value==7 && this.trigger=="f"){
        this.messageShow="inside 7 and inside f";
      }
    }

//More Higher
    if(value == 8){
      if(value==8 && this.trigger=="a"){
        this.messageShow="inside 8 and inside a";
      }
      if(value==8 && this.trigger=="b"){
        this.messageShow="inside 8 and inside b";
      }
      if(value==8 && this.trigger=="c"){
        this.messageShow="inside 8 and inside c";
      }
      if(value==8 && this.trigger=="d"){
        this.messageShow="inside 8 and inside d";
      }
      if(value==8 && this.trigger=="e"){
        this.messageShow="inside 8 and inside e";
      }
      if(value==8 && this.trigger=="f"){
        this.messageShow="inside 8 and inside f";
      }
    }
  }

  constructor(private _jobService: JobService) {
   }


  ngOnInit() {
   
  /*  
     this._jobService.getJobs()
    .subscribe(data => this.jobList = data,
    error=>this.errorMsg = error);
    */
  }
 
 
   Klick(event){
     console.log(event.value);
   }
}
