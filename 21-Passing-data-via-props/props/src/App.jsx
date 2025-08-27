import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FoodItems } from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {

  let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
  
  return (
    <>
      <h1>Healthy Foods</h1>
      <FoodItems />
      <ErrorMessage />
    </>
  );
}

export default App;