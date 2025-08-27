import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./Components/App.css";
function App() {

  const todoItems = [
  { name: 'Buy Milk', dueDate: '17/8/2025' },
  { name: 'Go to college', dueDate: '17/8/2025' },
  { name: 'Complete React Project', dueDate: 'Right Now' }
];


  return (
    <center className="todoContainer">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
