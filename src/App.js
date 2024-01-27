// App.js
import React, { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import FoodSearch from './components/Search';
import { Row, Col } from 'antd';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
    setFilteredFoodList((prevFilteredFoodList) => [...prevFilteredFoodList, newFood]);
  };

  const handleSearch = (searchValue) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredFoodList(filteredFoods);
  };

  const handleDelete = (foodName) => {
    const updatedFoodList = foodList.filter((food) => food.name !== foodName);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <FoodSearch onSearch={handleSearch} />

      <Row gutter={16}>
        {filteredFoodList.map((food, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <FoodBox food={food} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
