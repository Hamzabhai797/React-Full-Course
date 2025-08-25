export const FoodItems = () => {

  // let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
  return (
    <ul className="list-group">
      {foodItems.map((items) => (
        <li key={items} className="list-group-item">
          {items}
        </li>
      ))}
    </ul>
  );
};


