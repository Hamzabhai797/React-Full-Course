// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   // let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
//   let foodItems = [];

//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       {foodItems.length === 0 ? <h3>No food items available</h3> : null}
//       <ul className="list-group">
//         {foodItems.map((items) => (
//           <li key={items} className="list-group-item">{items}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;



// 2nd method   turnary operator


// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   // let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
//   let foodItems = [];
//   let emptyMessage = foodItems.length === 0 ? <h3>No food items available</h3> : null ;

//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       {emptyMessage}
//       <ul className="list-group">
//         {foodItems.map((items) => (
//           <li key={items} className="list-group-item">{items}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;



// 3rd method   logical && operator

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = ["Dal", "Fruits", "Vegetables", "Nuts", "Milk", "Ghee"];
  let foodItems = [];

  return (
    <>
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 && <h3>No food items available</h3>}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">{items}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
