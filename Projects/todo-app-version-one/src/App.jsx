import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import { TodoItem1 } from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./Components/App.css";
function App() {
  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo />
      <div className="Items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
