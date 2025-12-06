import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems}) => {
  return (
    <div className="Item-container">
      {todoItems.map((item) => (
        <TodoItem todoname={item.name} tododate={item.duedate}></TodoItem>
      ))}
      {/* <TodoItem todoname="Go to college" tododate="4/12/2025"></TodoItem> */}
    </div>
  );
}
export default TodoItems;