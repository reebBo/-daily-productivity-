import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  completedTodos: Todo[];

  constructor(private ts: TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.ts.getTodos().subscribe((response: Todo[]) => {
      //console.log("Todos", response);
      this.todos = response.filter(todo => !todo.completed);
      this.completedTodos = response.filter(todo => todo.completed);
    });
  }

  addTodo(title: string) {
    if (title === '') {
      return;
    }
    const todo: Todo = { title, completed: false };
    this.ts.addTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.ts.deleteTodo(todo);
  }

  editTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.ts.editTodo(todo);
  }
}
