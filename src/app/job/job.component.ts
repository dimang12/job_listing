import { Component, OnInit } from '@angular/core';
import {TYPES} from '../job/job-types-list';
import {SKILLS} from '../job/skill-levels-list';
import { JobTypes } from './Job-types';
import { SkillLevels } from './skill-levels';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit {
  typess = TYPES;
  skillss = SKILLS;

  selectedTypes : JobTypes;
  selectedSkills : SkillLevels;

  constructor() { }

  ngOnInit() {
  }

  onSelect(types : JobTypes):void{
    this.selectedTypes = types;
  }
  onSelect1(skills : SkillLevels):void{
    this.selectedSkills = skills;
  }

}
