import { Injectable } from '@angular/core';
import { WorkModel } from '../models/work.model';
import { WORKS } from 'src/assets/files/mock-works';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  works: WorkModel[] = WORKS;

  constructor() { }

  getWorks(): WorkModel[]{
    return this.works;
  }


}
