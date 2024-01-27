// App.js
import React, { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodList, setFoodList] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />

      {foodList.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
}

export default App;
