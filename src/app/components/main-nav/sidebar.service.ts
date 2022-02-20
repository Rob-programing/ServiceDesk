import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private showSidebar = new BehaviorSubject<boolean>(false);

  constructor() { }
  
  setValue(value: boolean) {
    this.showSidebar.next(value);
  }

  getValue() {
    this.showSidebar.value;
  }

  getValue$() {
    this.showSidebar.asObservable;
  }

 
}
