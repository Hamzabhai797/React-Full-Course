const FoodItems = () => {

  
  let foodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <ul class="list-group">
      {foodItems.map((item) => (
        <li class="list-group-item">{item}</li>
      ))}
    </ul>
  );
};

export default FoodItems;
