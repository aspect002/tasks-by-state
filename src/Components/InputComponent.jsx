import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст..."
      />
      <p>Значение state: {inputValue}</p>
      <p>Длина введенного текста: {inputValue.length}</p>
    </div>
  );
};

export default InputComponent;
