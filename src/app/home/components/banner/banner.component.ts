import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'https://i.imgur.com/yAL0uBl.jpg',
    'https://i.imgur.com/EacQJf4.jpg',
    'https://i.imgur.com/K9HEhrD.jpg',
    'https://i.imgur.com/zJUyQhx.jpg',
    'https://i.imgur.com/mJeGbdj.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
