import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './Keyboard';

function App() {
  const [keysPressed, setKeysPressed] = useState([]);
  const [workingKeys, setWorkingKeys] = useState([]);
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleKeyDown = (event) => {
    event.preventDefault(); // Заблокувати дію клавіш за замовченням
    const key = event.code; // Використовуємо event.code для забезпечення незалежності від розкладки
    if (!keysPressed.includes(key)) {
      setKeysPressed((prevKeys) => [...prevKeys, key]);
      setWorkingKeys((prevKeys) => [...prevKeys, key]);
      setPressedKeys((prevKeys) => [...prevKeys, key]);
    }
  };

  const handleKeyUp = (event) => {
    const key = event.code;
    setPressedKeys((prevKeys) => prevKeys.filter((k) => k !== key));
  };

  const resetTest = () => {
    setKeysPressed([]);
    setWorkingKeys([]);
    setPressedKeys([]);
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
      <Keyboard keysPressed={keysPressed} workingKeys={workingKeys} pressedKeys={pressedKeys} />
      <button onClick={resetTest}>Reset Test</button>
    </div>
  );
}

export default App;
