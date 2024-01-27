// App.js
import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from "./foods.json";

function App() {
  return (
    <div className="App">
      {foods.map((food) => (
        <FoodBox key={food.name} food={food} />
      ))}
    </div>
  );
}

export default App;
