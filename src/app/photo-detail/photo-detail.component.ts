import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../models/gallery-image.model';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  imageToDisplay: FirebaseObjectObservable<GalleryImage>
  imgUrl;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.imageToDisplay = this.imageService.getImageById(this.route.snapshot.params['id']);
    this.imageToDisplay.subscribe(data => {
      this.imgUrl = data.url;
    });
  }
}
