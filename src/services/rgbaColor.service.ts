import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>('Initial Data');
  currentData = this.dataSubject.asObservable();

  changeData(newData: string) {
    this.dataSubject.next(newData);
  }
}