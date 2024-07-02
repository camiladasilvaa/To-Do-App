import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { RouterModule } from "@angular/router"


import { Router } from "express"
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';



export const routes: Routes = [
  { path: 'edit/:id', component: EditTodoComponent }
];
