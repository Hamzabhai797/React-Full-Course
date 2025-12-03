import { Item } from "./Item";

const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
