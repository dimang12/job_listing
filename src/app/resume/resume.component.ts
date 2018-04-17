import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public resume: any;

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resume = this.resumeService.getResume()[0];
    // console.log(this.resume[0].firstName);
  }

}
