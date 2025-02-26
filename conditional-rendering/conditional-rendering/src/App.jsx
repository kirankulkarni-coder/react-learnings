import { useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import InputText from "./components/InputText";

function App() {
  let [healthyFoods, setHealthyFoods] = useState([
    { item: "Dal", active: false },
    { item: "Roti", active: false },
    { item: "Green Vegetables", active: false },
    { item: "Butter", active: false },
    { item: "Milk", active: false },
  ]);

  const onChangeHandler = (event) => {
    if (event.key == "Enter") {
      let enteredValue = event.target.value;
      let newHealthyFoods = [
        ...healthyFoods,
        { item: enteredValue, active: false },
      ];
      setHealthyFoods(newHealthyFoods);
    }

    console.log(event.target.value);
  };

  return (
    <>
      <InputText onChangeHandler={onChangeHandler}></InputText>
      <ErrorMessage foodItems={healthyFoods}></ErrorMessage>
      <FoodItems foodItems={healthyFoods}></FoodItems>
    </>
  );
}

export default App;
