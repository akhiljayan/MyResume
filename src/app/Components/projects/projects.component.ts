import { Component, OnInit } from '@angular/core';
import { Projects, ProjectsData } from 'src/app/AllDataObjects/DataFile';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Array<ProjectsData>;
  constructor() { 
    this.projects = new Projects().getProjects();
  }

  ngOnInit(): void {
  }

}
