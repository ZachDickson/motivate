import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  let todoElem = document.getElementById("tasklist");
  let template = "";

  todos.forEach(t => {
    template += t.todoTemplate;
  });
console.log(template)
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      task: form.task.value
      //TODO build the todo object from the data that comes into this method
    };
    TodoService.addTodoAsync(todo);

  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
