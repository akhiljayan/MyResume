import { Component, OnInit } from '@angular/core';
import { ISkills } from '../../AllDataObjects/AllInterface';
import { SkillDetails } from '../../AllDataObjects/DataFile';

@Component({
  selector: '[skills]',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsData :ISkills;
  constructor() { 
    this.skillsData = new SkillDetails().getData();
  }

  ngOnInit(): void {
  }

}
