import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todos = [ 
    {
    label: 'Bring Milk',
    done: false,
    priority: 3
  },
  {
    label: 'Watch Movie',
    done: false,
    priority: 4
  }, 
  {
    label: 'Clean House',
    done: true,
    priority: 1
  },
  {
    label: 'Work Out',
    done: false,
    priority: 2
  }
];

addTodo(newTodoLabel){
  var newTodo = {
    label: newTodoLabel,
    priority: 1,
    done: false

  };
  this.todos.push(newTodo);
}
deleteTodo(todo){
  this.todos = this.todos.filter(t => t.label !==todo.label)
}
}
