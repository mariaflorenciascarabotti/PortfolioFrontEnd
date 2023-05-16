import { Injectable } from '@angular/core';
import { WorkModel } from '../models/work.model';
import { WORKS } from 'src/assets/files/mock-works';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  works: WorkModel[] = WORKS;

  constructor() { }

  getWorks(): Observable<WorkModel[]>{
    const works = of(WORKS);
    return works;
  }


}
