import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() workData: any;
  @Output() workRemove: EventEmitter<WorkModel> = new EventEmitter();

  deleteWork(workToDelete: WorkModel){
    this.workRemove.emit(workToDelete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
