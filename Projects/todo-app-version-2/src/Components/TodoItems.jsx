import {TodoItem} from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.ItemsContainer}>
      {todoItems.map((item, idx) => <TodoItem key={idx} TodoName={item.name} TodoDate={item.dueDate} />)}
    </div>
  );
};
export default TodoItems;
