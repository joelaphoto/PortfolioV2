import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../models/gallery-image.model';
import { Upload } from '../models/upload.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
  providers: [ImageService]
})
export class PhotographyComponent implements OnInit, OnChanges {

  showPortrait: boolean = false;
  showEvent: boolean = false;
  showProduct: boolean = false;

  images: Upload[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
    });
  }

  ngOnChanges() {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
    });
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

  isPortraitActive() {
    if(this.showPortrait === true){
      return "red";
    } else {
      return "white"
    }
  }

  isProductActive() {
    if(this.showProduct === true){
      return "red";
    } else {
      return "white"
    }
  }

  isEventActive() {
    if(this.showEvent === true){
      return "red";
    } else {
      return "white"
    }
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
