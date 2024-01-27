// App.js
import React, { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodSearch from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
    setFilteredFoodList((prevFilteredFoodList) => [
      ...prevFilteredFoodList,
      newFood,
    ]);
  };

  const handleSearch = (searchValue) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredFoodList(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <FoodSearch onSearch={handleSearch} />

      {filteredFoodList.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
}

export default App;
