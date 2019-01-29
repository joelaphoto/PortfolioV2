import { Component, OnInit } from '@angular/core';
import { Upload } from '../models/upload.model';
import { UploadService } from '../services/upload.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  files: FileList;
  upload: Upload;
  addingImages: boolean;

  constructor(private uploadService: UploadService) { 
  }

  ngOnInit() {
    this.addingImages = false;
  }

  toggleAddingImages() {
    if(!this.addingImages) {
      this.addingImages = true;
    } else {
      this.addingImages = false;
    }
  }

  handleFiles(event){
    this.files = event.target.files
  }

  uploadFiles(title: string){
    this.uploadService.setUploadPath(this.upload.gallery);
    const filesToUpload = this.files;
      this.upload = new Upload(filesToUpload[0]);
      this.upload.name = title;
      this.upload.gallery = this.upload.gallery;
      this.uploadService.uploadFiles(this.upload);
  }
}