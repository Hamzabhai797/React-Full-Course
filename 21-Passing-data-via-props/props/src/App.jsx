import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FoodItems } from "./Components/FoosItems";

function App() {
  let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 && <h3>No food items available</h3>}
      <FoodItems />
    </>
  );
}

export default App;