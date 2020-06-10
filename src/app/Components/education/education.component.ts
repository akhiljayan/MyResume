import { Component, OnInit } from '@angular/core';
import { Education, EducationData } from '../../AllDataObjects/DataFile';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Array<Education>;
  constructor() {
    this.educations = new EducationData().getEducationData();
  }

  ngOnInit(): void {
  }

}
