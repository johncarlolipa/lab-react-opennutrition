// FoodBox.jsx
import React from 'react';
import './Foodbox.css';

const FoodBox = ({ food, onDelete }) => {
  const handleDelete = () => {
    onDelete(food.name);
  };

  return (
    <div className="food-box">
      <img src={food.image} alt={food.name} />
      <div>
        <h2>{food.name}</h2>
        <p>Servings: {food.servings}</p>
        <p>Calories: {food.calories}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default FoodBox;
