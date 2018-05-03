import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service'
import { Project } from '../models/project.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { Upload } from '../models/upload.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService, ImageService]
})

export class AdminComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;
  images: FirebaseListObservable<Upload[]>;
  isAddingProject: boolean = false;
  adminPhotosBool: boolean = false;
  adminProjectsBool: boolean = false;
  addPhotosBool: boolean = false;

  constructor(private imageService: ImageService,private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.images = this.imageService.getImages();
  }

  adminProjects() {
    this.adminPhotosBool = false;
    this.adminProjectsBool = true;
  }

  adminImages() {
    this.adminPhotosBool = true;
    this.adminProjectsBool = false;
  }

  deleteProject(project: Project){
    if(confirm("Are you sure you want to delete this project?")){
      this.projectService.deleteProject(project);
    }
  }

  editProject(project){
    this.router.navigate(['Admin/Projects', project.$key])
  }

  deleteImage(image: Upload){
    this.imageService.removeImage(image);
  }

  addPhotos() {
    if (this.addPhotosBool) {
      this.addPhotosBool = false;
    } else {
      this.addPhotosBool = true;
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
