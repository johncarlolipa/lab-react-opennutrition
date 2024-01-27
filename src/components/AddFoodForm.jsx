// AddFoodForm.jsx
import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';

const AddFoodForm = ({ onAddFood }) => {
  const [foodData, setFoodData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onAddFood(foodData);
    setFoodData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <Form>
      <Form.Item label="Name">
        <Input name="name" value={foodData.name} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item label="Image">
        <Input name="image" value={foodData.image} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item label="Calories">
        <Input name="calories" value={foodData.calories} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item label="Servings">
        <Input name="servings" value={foodData.servings} onChange={handleInputChange} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Add Food
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddFoodForm;
