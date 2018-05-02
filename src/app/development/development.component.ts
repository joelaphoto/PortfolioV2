import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-Development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  providers: [ProjectService]
})
export class DevelopmentComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
    this.projects = this.projectService.getProjects().valueChanges();
=======
    this.projects = this.projectService.getProjects();
>>>>>>> parent of 97ae212... add upload component, upload service, upload form, update to AngularFire 5.0.0
  }

  changeDate(dateString) {
    console.log(dateString)
    const year = dateString.slice(0,4)
    const month = dateString.slice(5,7)
    const day = dateString.slice(8,10)
    const formattedString = 'Start Date: ' + month + '/' + day + '/' + year;
    return formattedString
  }
}
