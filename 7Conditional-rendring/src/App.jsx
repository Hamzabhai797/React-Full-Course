import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // let FoodItems = [];
  let FoodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];

                  // if-else statement ke saat conditional rendering hay 
  // if (FoodItems.length === 0) {
  //   return <h3>No Food Items Available</h3>;
  // }

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
                      {/* Turnery opertor ke zariye conditional rendering */}
      {/* {FoodItems.length === 0 ? <h3>No Food Items Available</h3> : null} */}

                      {/* Logical operator ke zariye conditional rendering */}
      {/* {FoodItems.length === 0 && <h3>No Food Items Available</h3>} */}
      <ul class="list-group">
        {FoodItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App
