import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './Keyboard';

function App() {
  const [keysPressed, setKeysPressed] = useState([]);
  const [workingKeys, setWorkingKeys] = useState([]);

  const handleKeyDown = (event) => {
    event.preventDefault(); // Заблокувати дію клавіш за замовченням
    const key = event.code; // Використовуємо event.code для забезпечення незалежності від розкладки
    if (!keysPressed.includes(key)) {
      setKeysPressed((prevKeys) => [...prevKeys, key]);
      setWorkingKeys((prevKeys) => [...prevKeys, key]);
    }
  };

  const handleKeyUp = (event) => {
    // Логіка для обробки відпускання клавіш (якщо необхідно)
  };

  const resetTest = () => {
    setKeysPressed([]);
    setWorkingKeys([]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <h1>Keyboard Tester</h1>
      <Keyboard keysPressed={keysPressed} workingKeys={workingKeys} />
      <button onClick={resetTest}>Reset Test</button>
    </div>
  );
}

export default App;
