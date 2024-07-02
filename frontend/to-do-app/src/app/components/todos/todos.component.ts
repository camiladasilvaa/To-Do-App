import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../service/todo.service';
import { FormsModule } from '@angular/forms';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  newTodoTitle: string = '';
  updatedTitle: string = '';
  

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  async loadTodos(): Promise<void> {
    try {
      this.todos = await this.todoService.getTodos();
    } catch (error) {
      console.log('paso un error');
    }
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.createTodo(this.newTodoTitle).subscribe(todo => {
        this.todos.push(todo);
        this.newTodoTitle = '';
      });
    }
  }

  updateTodo(todo: Todo): void {
    if (todo.title.trim()) {
      this.todoService.updateTodo(todo.id, todo.title).subscribe(() => {
        window.location.reload()
      });
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  toggleCompleted(todo: Todo): void {
    this.todoService.toggleTodoCompleted(todo.id).subscribe(() => {
      window.location.reload()
    });
  }

  getTodo(id: number): void {
    this.todoService.getTodo(id).subscribe((data:Todo) => {
      console.log(data)
    });
  }

}
