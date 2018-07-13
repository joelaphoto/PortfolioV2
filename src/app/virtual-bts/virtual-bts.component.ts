import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-bts',
  templateUrl: './virtual-bts.component.html',
  styleUrls: ['./virtual-bts.component.css']
})
export class VirtualBtsComponent implements OnInit {

  constructor() { }

  images = ["#coast", "#garden", "#falcon", "#ocean", "#paris", "#night"];
  currentImgIndex=0;
  currentImg: "#coast";

  ngOnInit() {
    this.currentImg=this.images[this.currentImgIndex];
  }

  nextImg(){
    if (this.currentImgIndex < this.images.length - 1){
      this.currentImgIndex ++;
      document.getElementById('360image').setAttribute("src", "" + this.images[this.currentImgIndex])
    }
  }

  backImg(){
    if (this.currentImgIndex > 0){
      this.currentImgIndex --;
      document.getElementById('360image').setAttribute("src", "" + this.images[this.currentImgIndex])
    }
  }
}
