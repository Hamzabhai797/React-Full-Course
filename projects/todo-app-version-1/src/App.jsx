import AppName from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import { TodoItem } from "./Components/TodoItem";

function App() {
  return (
    <div>
      <center class="todo-content">
        <AppName></AppName>

        <AddTodo></AddTodo>

        <TodoItem></TodoItem>

        <div class="container text-center">
          <div class="row">
            <div class="col-6">Go to College</div>
            <div class="col-4">21/11/2025</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger">
                delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
