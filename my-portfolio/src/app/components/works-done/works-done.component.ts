import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit {
  @Input() title:string = 'Trabajos';

  constructor() { }

  ngOnInit(): void {
  }

}
