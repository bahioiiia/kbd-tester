import React from 'react';
import styles from './Keyboard.module.css';
import KeyboardRow from './KeyboardRow';

function KeyboardBlock({ blockKeys, keysPressed, workingKeys, pressedKeys }) {
  return (
    <div className={styles.keyboardBlock}>
      {blockKeys.map((rowKeys, index) => (
        <KeyboardRow
          key={index}
          rowKeys={rowKeys}
          keysPressed={keysPressed}
          workingKeys={workingKeys}
          pressedKeys={pressedKeys}
        />
      ))}
    </div>
  );
}

export default KeyboardBlock;
