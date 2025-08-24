import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
