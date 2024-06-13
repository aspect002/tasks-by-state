import React, { useState } from 'react';

const HideShowText = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <button onClickCapture={toggleTextVisibility}>
        {isTextVisible ? 'Скрыть текст' : 'Показать текст'}
      </button>
      {/*Рендерим абзац текста, но только если isTextVisible равно true. Это достигается
       с помощью условного рендеринга {isTextVisible && (<p>текст</p>)*/}
      {isTextVisible && (
        <p>
          Это скрываемый/показываемый текст. Нажмите на кнопку, чтобы
          переключить его видимость.
        </p>
      )}
    </div>
  );
};

export default HideShowText;
