import { Component, OnInit } from "@angular/core";
import { ImageService } from "../services/image.service";
import { FirebaseListObservable } from "angularfire2/database";
import { Upload } from "../models/upload.model";
import { forEach } from "@angular/router/src/utils/collection";
import { element } from "protractor";

@Component({
  selector: "app-virtual-bts",
  templateUrl: "./virtual-bts.component.html",
  styleUrls: ["./virtual-bts.component.scss"]
})
export class VirtualBtsComponent implements OnInit {
  constructor(private imageService: ImageService) {}

  threeSixty: Upload[];
  imageUrls: string[];
  currentImgIndex = 0;

  ngOnInit() {
    // this.imageService.getThreeSixty().subscribe(data => {
    //   this.threeSixty = data;
    //   let imageArr = new Array<string>();
    //   imageArr.push("#coast");
    //   this.threeSixty.forEach(function(element) {
    //     let url = element.url;
    //     imageArr.push(url);
    //   });
    //   this.imageUrls = imageArr;
    // });
  }

  HighLightNext(){
    document.getElementById("next").setAttribute("src", "#nextImgHi")
  }

  HighLightBack(){
    document.getElementById("back").setAttribute("src", "#backImgHi")
  }

  ResetNext(){
    document.getElementById("next").setAttribute("src", "#nextImg")

  }

  ResetBack(){
    document.getElementById("back").setAttribute("src", "#backImg")
  }

  nextImg() {
    if (this.currentImgIndex < this.imageUrls.length - 1) {
      this.currentImgIndex++;
      document
        .getElementById("360image")
        .setAttribute("src", this.imageUrls[this.currentImgIndex]);
        console.log(this.currentImgIndex)
    }
  }

  backImg() {
    if ((this.currentImgIndex > 0)) {
      this.currentImgIndex--;
      document.getElementById("360image").setAttribute("src", this.imageUrls[this.currentImgIndex]);
      console.log(this.currentImgIndex)
  }
}

}
