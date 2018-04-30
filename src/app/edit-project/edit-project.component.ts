import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  postId: string;
  projectToEdit;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.postId = urlParameters['id'];
   });
   this.projectToEdit = this.projectService.getProjectById(this.postId).subscribe(dataLastEmittedFromObserver => {
     this.projectToEdit = dataLastEmittedFromObserver;
    });
  }

  updateProject() {
    if (confirm('Save changes to post?')) {
      this.projectService.updateProject(this.projectToEdit);
    }
  }
}
