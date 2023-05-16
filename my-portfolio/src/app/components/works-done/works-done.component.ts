import { Component, Input, OnInit } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';
import { WORKS } from 'src/assets/files/mock-works';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit {
  @Input() title:string = 'Trabajos';

  workList: WorkModel[] = [];


  constructor(private workListService: WorkListService) { }
  
  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void {
    this.workList = this.workListService.getWorks();
  }

}
