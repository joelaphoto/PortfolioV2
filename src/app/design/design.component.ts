import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css'],
  providers: [ProjectService]
})
export class DesignComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
