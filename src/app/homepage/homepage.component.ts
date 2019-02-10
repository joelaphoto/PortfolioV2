import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {
    let el = document.getElementById("target");
    el.scrollIntoView({behavior: "smooth"});
  }

}
