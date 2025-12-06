import AppName from "./Components/AppName";
import { AddTodo } from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "4/12/2025",
    },
    {
      name: "Go to college",
      duedate: "4/12/2025",
    },
    {
      name: "Like this video",
      duedate: "Right Now",
    },
  ];
  return (
    <div>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}></TodoItems>
      </center>
    </div>
  );
}

export default App;
