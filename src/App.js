// App.js
import React, { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import FoodSearch from './components/Search';
import { Row, Col, Button } from 'antd';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);
  const [isFormVisible, setIsFormVisible] = useState(true);

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

  const toggleFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return (
    <div className="App">
      <Button onClick={toggleFormVisibility} style={{ marginBottom: '10px' }}>
        {isFormVisible ? 'Hide Form' : 'Add New Food'}
      </Button>

      {isFormVisible && <AddFoodForm onAddFood={handleAddFood} />}
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
