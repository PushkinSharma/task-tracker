import { Component, Output, EventEmitter } from '@angular/core';

import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter(); // we want to emit an event to the parent component, so we use the @Output decorator

  text!: string;
  day!: string;
  reminder: boolean = false;

  onSubmit(){
    if(!this.text){
      console.log('Please add a task');
      return;
    };

    const newTask={     // this is what we want to submit to our server through our service. But we wont do that here, but in the parent component, hence we have to emit an event here.
      text:  this.text,
      day:  this.day,
      reminder:  this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;    // cuz default will always be unchecked
    
    
  }

}

