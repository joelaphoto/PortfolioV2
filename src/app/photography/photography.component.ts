import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/gallery-image.model';
import { Upload } from '../models/upload.model';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
  providers: [ImageService]
})
export class PhotographyComponent implements OnInit, OnChanges {

  showPortrait: boolean = false;
  showEvent: boolean = false;
  showProduct: boolean = false;

  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }

  viewPortrait() {
    this.showEvent = false;
    this.showProduct = false;
    this.showPortrait = true;
  }

  viewEvent() {
    this.showEvent = true;
    this.showProduct = false;
    this.showPortrait = false;
  }

  viewProduct() {
    this.showEvent = false;
    this.showProduct = true;
    this.showPortrait = false;
  }



  display(image) {
    if (this.showPortrait == true && image.category == 'portrait') {
      return true;
    } else if (this.showEvent == true && image.category == 'event') {
      return true;
    } else if (this.showProduct == true && image.category == 'product') {
      return true;
    } else {
      return false;
    }
  }
}
