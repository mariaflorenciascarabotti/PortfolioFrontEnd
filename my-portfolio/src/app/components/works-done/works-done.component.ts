import { Component, Input, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';

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
    this.workListService.getWorks().subscribe((workList) => { this.workList = workList});
  }

  addWork(): void {
    let newId: number = this.workList.length + 1
    const newWork: WorkModel = {
      id: newId,
      title: `trabajo ${newId}`,
      urlImage: "https://lh3.googleusercontent.com/XSDv6XYZ973bdxMBDJ1adLHpSSUv4vsZJaePpms21eZDl-27JIfTHIYXnnudwPfAg_1-59bKAarMhWGNagsTR2Gq0pAWBUw6CwYwH2V0TzDXZT9z1fKvr1vCOrk8nxZ-U7wVfOJq",
      description: "El mejor trabajo"
    }
    this.workListService.add(newWork as WorkModel).subscribe((work: WorkModel) =>{
      this.workList.push(work);
    });
  }

  removeWorkToList(workToRemove: WorkModel): void {
    this.workListService.remove(workToRemove.id).subscribe();
    this.getWorkList();
  }

}
