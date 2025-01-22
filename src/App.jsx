import React, { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard/keyboard.jsx';

function App() {
  const [keysPressed, setKeysPressed] = useState([]);
  const [workingKeys, setWorkingKeys] = useState([]);

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    if (!keysPressed.includes(key)) {
      setKeysPressed((prevKeys) => [...prevKeys, key]);
      setWorkingKeys((prevKeys) => [...prevKeys, key]);
    }
  };

  const handleKeyUp = (event) => {
    // відпускання клавіш
  };

  const resetTest = () => {
    setKeysPressed([]);
    setWorkingKeys([]);
  };

  return (
    <div className="App" tabIndex="0" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <h1>Keyboard Tester</h1>
      <Keyboard keysPressed={keysPressed} workingKeys={workingKeys} />
      <button onClick={resetTest}>Reset Test</button>
    </div>
  );
}

export default App;
