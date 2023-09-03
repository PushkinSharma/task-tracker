import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http'

import { Observable} from 'rxjs';

import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor( private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  /*
  When you call deleteTask(task), it sends an HTTP DELETE request to the specified URL. If the task is successfully deleted on the server, the observable will emit the deleted task, and you can handle this event in your component by subscribing to the observable.
  */
  deleteTask(task:Task) : Observable<Task>{     //i.e this method will return an observable of type Task.
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);        //sending a delete request to the url.
  }
}
