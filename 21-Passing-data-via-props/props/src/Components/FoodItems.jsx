export const FoodItems = ({ foodItems }) => {

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


