import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];

  let textStateArr = useState("Food item entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  console.log(`current value of textState is: ${textToShow}`);


    const handleOnChange = (event) => {
      console.log(event.target.value);
      setTextState(event.target.value);
    };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Above is the list of healthy food that are good for 
          your health and well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
