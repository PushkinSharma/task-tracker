import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  
  /* it flips the value of showAddTask and then emits this new value using the Subject. Other parts of your application that have subscribed to this Subject can react to the change in visibility and adjust their behavior accordingly. */
  toggleAddTask(): void{   
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable(); //used to convert the Subject into a plain Observable. This is a common practice when you want to expose a controlled observable to the outside world while preventing direct calls to methods like next() on the Subject. It essentially exposes only the observing capabilities of the Subject.
  }
}
