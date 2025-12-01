import './App.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // let FoodItems = [];
  // let foodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];


  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App
