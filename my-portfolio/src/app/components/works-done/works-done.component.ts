import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit {
  @Input() title:string = 'Trabajos';

  work = {
    "id": 1,
    "title": "Primer trabajo",
    "urlImage": "https://blog.educacionit.com/wp-content/uploads/2018/09/shutterstock-10338536170938-620x354-01.jpg",
    "description": "Me encantó este trabajo"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
