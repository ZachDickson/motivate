import store from "../store.js";
import Todos from "../models/todos.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Zach/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List", store.State.todos);
    todoApi
      .get("")
      .then (res=> {
        let allTodos = res.data.data.map (t => new Todos(t))
      })
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi
    .post("", todo)
    .then(res => {
      let newTodo = new Todos(res.data.data);
      let todos = [...store.State.todos, newTodo];
      store.commit("todos", todos);
    })
    .catch(error => {
      console.error(error);
    });
}
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

//   toggleTodoStatusAsync(todoId) {
//     let todo = store.State.todos.find(todo => todo._id == todoId);
//     //TODO Make sure that you found a todo,
//     //		and if you did find one
//     //		change its completed status to whatever it is not (ex: false => true or true => false)

//     todoApi.put(todoId, todo);
//     //TODO do you care about this data? or should you go get something else?
//   }

//   removeTodoAsync(todoId) {
//     //TODO Work through this one on your own
//     //		what is the request type
//     //		once the response comes back, what do you need to insure happens?
//   }
// }

const todoService = new TodoService();
export default todoService;
