import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { ImageService } from '../services/image.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  constructor(private authService: AuthenticationService, private imageService: ImageService, private route: ActivatedRoute, private router: Router) { }

  galleryName: string;
  imageKey: string;
  imageToDisplay: Upload;
  user: Observable<firebase.User>

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryName = urlParameters['gallery'];
      this.imageKey = urlParameters['id'];
    });
    this.imageService.getImageById(this.galleryName, this.imageKey).subscribe( data => {
      this.imageToDisplay = data;
    });
    this.user = this.authService.authUser();
  }

  navToGallery() {
    this.router.navigate(['photography',this.imageToDisplay.gallery])
  }

  deleteImage() {
    this.imageService.removeImage(this.imageToDisplay)
    this.router.navigate([this.imageToDisplay.gallery]);
    window.location.reload();
  }
}
