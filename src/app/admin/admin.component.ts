import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service'
import { Project } from '../models/project.model';
import { AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/ob'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  projects;
  isAddingProject: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects().snapshotChanges().map(actions => {
    return actions.map(action => ({key: action.key, action.payload.val()}))
  }).subscribe(projects => projects.keys);
  }

  deleteProject(project: Project){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(project);
    }
  }

  editProject(key: string){
    this.router.navigate(['Admin/Projects', key])
  }

  addingProject() {
    if(this.isAddingProject) {
      this.isAddingProject = false;
    } else {
      this.isAddingProject = true;
    }
  }
}
