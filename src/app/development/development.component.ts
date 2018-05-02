import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-Development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  providers: [ProjectService]
})
export class DevelopmentComponent implements OnInit {
  projects;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects().valueChanges();
  }

  changeDate(dateString) {
    const year = dateString.slice(0,4)
    const month = dateString.slice(5,7)
    const day = dateString.slice(8,10)
    const formattedString = 'Start Date: ' + month + '/' + day + '/' + year;
    return formattedString
  }
}
