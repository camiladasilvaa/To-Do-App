import { Component } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  

}
