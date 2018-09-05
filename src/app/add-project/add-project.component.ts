import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

  }

  submitProject(name: string, date: string, shortDesc: string, longDesc: string, link: string, imgUrl: string, liveLink: string) {
    let newProject = new Project(name, date, shortDesc, longDesc, link, imgUrl);
    if(liveLink != ''){
      newProject.liveLink = liveLink
      newProject.hasLiveLink = true;
    } else {
      newProject.hasLiveLink = false;
    }
    this.projectService.addProject(newProject);
  }
}
