import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let foodItems = ["Dal", "Green Vegitable", "Roti", "Salad", "Milk", "Fruits"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItems.map(item => <li class="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}

export default App
