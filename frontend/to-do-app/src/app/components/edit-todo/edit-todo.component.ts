import { Component, OnInit } from '@angular/core';
import { TodosComponent } from '../todos/todos.component';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../todos/todos.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [TodosComponent, BrowserModule, FormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {

  todo!: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    this.todoService.getTodo(id).subscribe(todo => {
      this.todo = todo;
    });
  }

  updateTodo(todo: Todo): void {
    if (todo.title.trim()) {
      this.todoService.updateTodo(todo.id, todo.title).subscribe(() => {
        window.location.reload()
      });
    }
  }


}
