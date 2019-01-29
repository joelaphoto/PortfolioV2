import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
  providers: [ImageService]
})
export class PhotographyComponent implements OnInit {

  galleryName: string;
  images: Upload[];
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private imageService: ImageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryName = urlParameters['gallery'];
    })
    this.imageService.setGallery(this.galleryName);
    this.imageService.getGallery().subscribe(data => {
      this.images = data;
    });
    this.user = this.authService.authUser();
  }

  goToImageDetail(clickedImage) {
    this.router.navigate(['photography', clickedImage.gallery, clickedImage.$key]);
  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }
}
