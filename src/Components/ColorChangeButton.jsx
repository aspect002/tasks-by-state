import React, { useState } from 'react';

const ColorChangeButton = () => {
  // Используем useState для создания состояния цвета
  const [color, setColor] = useState('black');

  // Функция, которая меняет цвет при нажатии на кнопку
  const handleColorChange = () => {
    // Генерируем случайный цвет в формате HEX
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div>
      <h1 style={{ color: color }}>Текст с изменяющимся цветом</h1>
      <button onClick={handleColorChange}>Изменить цвет</button>
    </div>
  );
};

export default ColorChangeButton;
