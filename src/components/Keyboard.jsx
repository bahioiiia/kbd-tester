import React, { useEffect, useState } from 'react';
import styles from './Keyboard.module.css';
import keysData from '../keys.json';
import KeyboardBlock from './KeyboardBlock.jsx';

function Keyboard({ keysPressed, workingKeys, pressedKeys }) {
  const [blocks, setBlocks] = useState({});

  useEffect(() => { setBlocks(keysData.keys); }, []);
  
  return (
    <div className={styles.keyboard}>
      {Object.keys(blocks).map((blockName) => (
        <KeyboardBlock
          key={blockName}
          blockKeys={blocks[blockName]}
          keysPressed={keysPressed}
          workingKeys={workingKeys}
          pressedKeys={pressedKeys}
        />
      ))}
    </div>
  );
}

export default Keyboard;
