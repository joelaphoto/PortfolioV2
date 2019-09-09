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

  images: Upload[];
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private imageService: ImageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.imageService.getGallery().subscribe(data => {
      this.images = data;
    });
    this.user = this.authService.authUser();
  }

  calulateMonths(dateString) {
    const d1 = new Date(dateString);
    const d2 = new Date();
    let months;

    function isYears(years) {
      if (years < 2) {
        return " Year"
      } else {
        return " Years"
      }
    }

    function isMonths(months) {
      if (months < 2) {
        return " Month "
      } else {
        return " Months"
      }
    }

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    if (months < 12) {
      return months + isMonths(months)
    } else if (months >= 12) {
      const dispMonths = months % 12;
      const years = (months - dispMonths) / 12;
      if (dispMonths === 0) {
        return years + isYears(years)
      } else {
        return years + isYears(years) + " " + dispMonths + isMonths(dispMonths);
      }    
    }
  }

  goToImageDetail(clickedImage) {
    this.router.navigate(['photography', clickedImage.$key]);
  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }
}
