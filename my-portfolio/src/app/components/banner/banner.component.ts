import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  name: string = "Mi banner";
  urlImg: string = '../../../assets/img/digitization-5140071_1280.jpg';
  photo: string = `url('${this.urlImg}')`

  constructor() { }

  ngOnInit(): void {
  }

}
