import React from 'react';
import styles from './Keyboard.module.css';
import KeyboardRow from './KeyboardRow.jsx';
import Key from './Key.jsx';

function KeyboardBlock({ blockKeys, keysPressed, workingKeys, pressedKeys }) {
  return (
    <div className={styles.keyboardBlock}>
      {Array.isArray(blockKeys[0]) ? (
        blockKeys.map((rowKeys, index) => (
          <KeyboardRow
            key={index}
            rowKeys={rowKeys}
            keysPressed={keysPressed}
            workingKeys={workingKeys}
            pressedKeys={pressedKeys}
          />
        ))
      ) : (
        blockKeys.map((keyObj) => (
          <Key
            key={keyObj.code}
            keyObj={keyObj}
            isActive={keysPressed.includes(keyObj.code)}
            isWorking={workingKeys.includes(keyObj.code)}
            isPressed={pressedKeys.includes(keyObj.code)}
          />
        ))
      )}
    </div>
  );
}

export default KeyboardBlock;
