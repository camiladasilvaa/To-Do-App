import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { TodoComponent } from './components/todo/todo.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { CalendarComponent } from './components/calendar/calendar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, HeaderComponent, BottomComponent, TodoComponent, InfoBoxComponent, EditTodoComponent, ReactiveFormsModule, FormsModule, LoginComponent, MusicPlayerComponent, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';

  
}