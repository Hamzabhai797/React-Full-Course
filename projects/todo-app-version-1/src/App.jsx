import AppName from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>

        <div className="Item-container">
          <TodoItem></TodoItem>
          <TodoItem2></TodoItem2>
        </div>
      </center>
    </div>
  );
}

export default App;
