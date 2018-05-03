import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryImage } from '../models/gallery-image.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  imageUrl: string = '';
  title: string = '';
  description: string = '';

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.url);
  }

  getImageTitle(key: string) {
    this.imageService.getImage(key)
    .then(title => this.title = title.title)
  }

  getImageDescription(key: string) {
    this.imageService.getImage(key)
    .then(description => this.description = description.description)
  }

  detailDisplay() {

  }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
    this.getImageTitle(this.route.snapshot.params['id']);
    this.getImageDescription(this.route.snapshot.params['id']);
  }

}
