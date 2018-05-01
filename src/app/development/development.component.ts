import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
  selector: 'app-Development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  providers: [ProjectService]
})
export class DevelopmentComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
