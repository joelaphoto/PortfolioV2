import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service'
import { Project } from '../models/project.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  isAddingProject: boolean = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  deleteProject(project: Project){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(project);
    }
  }

  addingProject() {
    if(this.isAddingProject) {
      this.isAddingProject = false;
    } else {
      this.isAddingProject = true;
    }
  }
}
