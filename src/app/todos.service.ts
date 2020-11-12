import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todosCollection: AngularFirestoreCollection<Todo>;
  todoDoc: AngularFirestoreDocument<Todo>;
  todos: Observable<Todo[]>;

  constructor(private fs: AngularFirestore) {

    this.todosCollection = this.fs.collection('todos');

    //pull each data/document in the collection and save it in the todos Observable
    this.todos = this.todosCollection.snapshotChanges() //snapshot gives access to id too; otherwise we could use valueChanges()
      .pipe(
        map(changes => {
          return changes.map(x => {
            const data = x.payload.doc.data() as Todo;//return data from a document as Todo data 
            data.id = x.payload.doc['id'];
            return data;
          })
        })
      );
  }

  getTodos() {
    return this.todos;
  }


  addTodo(todo: Todo) {
    this.todosCollection.add(todo);
  }

  deleteTodo(todo) {
    this.todoDoc = this.fs.doc(`todos/${todo.id}`);
    this.todoDoc.delete();
  }

  editTodo(todo) {
    this.todoDoc = this.fs.doc(`todos/${todo.id}`);
    this.todoDoc.update(todo);
  }
}
