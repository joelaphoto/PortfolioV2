import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'firebase/storage';
import { GalleryImage } from '../models/gallery-image.model';
import * as firebase from 'firebase';
import { Upload } from '../models/upload.model';
import { UploadService } from './upload.service';

@Injectable()
export class ImageService {
  private uid: string;
  images: FirebaseListObservable<Upload[]>;

  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase, private uploadService: UploadService) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
    this.images = database.list('uploads');
  }

  getImages(): FirebaseListObservable<Upload[]> {
    return this.images;
  }

  getImageById(key: string) {
    return this.database.object('uploads/' + key)
  }

  removeImage(image: Upload) {
    let imageEntry = this.getImageById(image.$key);
    this.uploadService.deleteFile(image.name);
    imageEntry.remove()
  }
}
