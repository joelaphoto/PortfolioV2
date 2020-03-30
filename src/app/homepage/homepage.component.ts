import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor() { }
  gallery1 = "development";
  gallery2 = "photography";
  gallery3 = "design";

  limit1= 4;
  limit2= 4;
  limit3= 5;


  ngOnInit() {
    var $animation_elements = jquery('.row');
    var $window = jquery(window);
    jquery('.loader').delay(300).fadeOut(800, () => {
      $window.on('scroll', check_if_in_view);
      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll');
  
    })


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
        // else {
        //   $element.removeClass('in-view');
        // }
      });
    }
  }

  scroll() {
    let el = document.getElementById("target");
    el.scrollIntoView({behavior: "smooth"});
  }

  calulateYears(dateString) {
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

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    if (months < 12) {
      return "Less Than 1 Year"
    } else if (months >= 12) {
      const dispMonths = months % 12;
      const years = (months - dispMonths) / 12;
      return years + isYears(years);
    }
  }

}
