import { Component, OnInit } from '@angular/core';
import { WorkExperience, WorkExperienceData } from '../AllDataObjects/DataFile';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExps: Array<WorkExperience>;
  constructor() {
    this.workExps = new WorkExperienceData().getWorkExperienceData();
  }

  ngOnInit(): void {
  }

}
