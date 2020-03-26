import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as jquery from 'jquery';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-Development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
  providers: [ProjectService]
})
export class DevelopmentComponent implements OnInit {
  projects: Project[];
  user: Observable<firebase.User>
  imagesLoaded: number;
  imagesLoadedPercentage: number;

  constructor(private authService: AuthenticationService,private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.imagesLoaded = 0;
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      console.log(this.projects.length)
      var $animation_elements = jquery('.row');
      var $window = jquery(window);
      $window.on('scroll', check_if_in_view);
      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll');

      function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
      
        jquery.each($animation_elements, function() {
          var $element = jquery(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);
      
          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
          } 
        });
      }
    });;
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
        return years + isYears(years);
      } else {
        return years + isYears(years) + " " + dispMonths + isMonths(dispMonths);
      }
    }
  }

  changeDate(dateString) {
    const year = dateString.slice(0,4)
    const month = dateString.slice(5,7)
    const day = dateString.slice(8,10)
    const formattedString = 'Start Date: ' + month + '/' + day + '/' + year;
    return formattedString
  }

  isLoaded() {
    console.log("loaded")
    if(this.imagesLoaded === this.projects.length - 1) {
      console.log("fully loaded")
      this.imagesLoadedPercentage = 100;
      jquery('div.loader').fadeOut(800, function() {
        jquery('div.container').css('opacity', '1');

      });
    } else {
      this.imagesLoaded = this.imagesLoaded + 1;
      this.imagesLoadedPercentage = this.imagesLoaded / this.projects.length * 100;
    }
  }
}
