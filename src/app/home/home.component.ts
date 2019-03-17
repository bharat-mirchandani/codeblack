import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ "title": "nature 1", "url": "assets/1.jpg" });
    this.images.push({ "title": "nature 2", "url": "assets/2.jpg" });
    this.images.push({ "title": "nature 3", "url": "assets/3.jpg" });
    this.images.push({ "title": "nature 4", "url": "assets/4.jpg" });
    this.images.push({ "title": "nature 5", "url": "assets/5.jpg" });
    this.images.push({ "title": "nature 6", "url": "assets/6.jpg" });
    this.images.push({ "title": "nature 7", "url": "assets/1.jpg" });
    this.images.push({ "title": "nature 8", "url": "assets/2.jpg" });
    this.images.push({ "title": "nature 9", "url": "assets/3.jpg" });
    this.images.push({ "title": "nature 10", "url": "assets/4.jpg" });
    this.images.push({ "title": "nature 11", "url": "assets/5.jpg" });
    this.images.push({ "title": "nature 12", "url": "assets/6.jpg" });
    this.images.push({ "title": "nature 13", "url": "assets/1.jpg" });
  }

}
