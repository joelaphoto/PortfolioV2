import { Component } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;


  constructor(private uploadService: UploadService) { }

  handleFiles(event){
    this.files = event.target.files
  }

  uploadFiles(title: string, description: string, category: string){
    if (category = "360Image") {
      this.uploadService.galleryPath();
    }
    else{
      this.uploadService.portPath();
    }
    const filesToUpload = this.files;
      this.upload = new Upload(filesToUpload[0]);
      this.upload.title = title;
      this.upload.description = description;
      this.upload.category = category;
      this.uploadService.uploadFiles(this.upload);
  }

}
