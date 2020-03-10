import { Component, OnInit, Input } from '@angular/core';
import * as jquery from 'jquery';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() slideshowName: string;
  @Input() numberOfSlides: number;


  constructor() { }


  ngOnInit() {
    var imagePath = "../../assets/images/slideshow/" + this.slideshowName + "/";
    var bg = jquery("div#" + this.slideshowName + " div.bg");
    var imgNumber = 2;
    var slides = this.numberOfSlides;
    var controlSpeed = 300;
    var changing = false;
    var preload = function() {
      var preloadArray = [];
      for(var i = 0; i < slides; i++) {
        imgNumber = i + 1;
        preloadArray.push("<img class='preload' style='display: none; visibility: hidden' src='" + imagePath + "img-" + imgNumber + "-min.jpg'>");
      }
      jquery("body").append(preloadArray.join(''))
    }

    preload()

    jquery("div#" + this.slideshowName + " div.bg.active").css('background-image', 'url(' + imagePath + 'img-1-min.jpg)');

    function isChanging() {
      changing = !changing
    }

    jquery("div#" + this.slideshowName + " div.ctrl-left").on("click", function () {
      if(!changing) {
        clearInterval(interval);
        changing = true;
        if(imgNumber === 1) {
          imgNumber = slides;
        } else {
          imgNumber--;
        }
        if(jquery(bg[0]).hasClass("active")) {
          jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")")
          jquery(bg[0]).fadeOut(controlSpeed).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
        } else {
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(controlSpeed).addClass("active")
          jquery(bg[1]).removeClass("active");
        }
      }
    })

    jquery("div#" + this.slideshowName + " div.ctrl-right").on("click", function () {
      if(!changing) {
        clearInterval(interval);
        changing = true;
        if(imgNumber === slides) {
          imgNumber = 1;
        } else {
          imgNumber++;
        }
        if(jquery(bg[0]).hasClass("active")) {
          jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")")
          jquery(bg[0]).fadeOut(controlSpeed).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
        } else {
          setTimeout(function() {
            isChanging();
          }, controlSpeed)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(controlSpeed).addClass("active")
          jquery(bg[1]).removeClass("active");
        }
      }
    })

    var interval = setInterval(function() {
      if (!changing) {
        changing = true;
        if (imgNumber === slides) {
          imgNumber = 1;
        }
        if(jquery(bg[0]).hasClass("active")) {
          jquery(bg[1]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")")
          jquery(bg[0]).fadeOut(2000).removeClass("active");
          setTimeout(function() {
            isChanging();
          }, 2000)
        } else {
          setTimeout(function() {
            isChanging();
          }, 2000)
          jquery(bg[0]).css("background-image", "url(" + imagePath + "img-" + imgNumber + "-min.jpg" +")").fadeIn(2000).addClass("active")
          jquery(bg[1]).removeClass("active");
        }
        imgNumber++;
      }



    }, 7000)

  }

}
