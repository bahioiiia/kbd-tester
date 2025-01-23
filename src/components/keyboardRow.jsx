import React from 'react';
import styles from './keyboard.module.css';
import Key from './key.jsx';

function KeyboardRow({ rowKeys, keysPressed, workingKeys, pressedKeys }) {
  return (
    <div className={styles.keyboardRow}>
      {rowKeys.map((keyObj) => (
        <Key
          key={keyObj.code}
          keyObj={keyObj}
          isActive={keysPressed.includes(keyObj.code)}
          isWorking={workingKeys.includes(keyObj.code)}
          isPressed={pressedKeys.includes(keyObj.code)}
        />
      ))}
    </div>
  );
}

export default KeyboardRow;
