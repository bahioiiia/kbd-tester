import React, { useEffect, useState } from 'react';
import styles from './Keyboard.module.css';
import keysData from './keys.json';

function Keyboard({ keysPressed, workingKeys, pressedKeys }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setKeys(keysData.keys);
  }, []);

  return (
    <div className={styles.keyboard}>
      {keys.map((keyObj) => (
        <div
          key={keyObj.code}
          className={`${styles.key} ${keysPressed.includes(keyObj.code) ? styles.active : ''} ${workingKeys.includes(keyObj.code) ? styles.working : ''} ${pressedKeys.includes(keyObj.code) ? styles.pressed : ''}`}
        >
          {keyObj.type === 'symbol' ? (
            <>
              <div className={styles.labelTopLeft}>{keyObj.labels.tl || ''}</div>
              <div className={styles.labelBottomLeft}>{keyObj.labels.bl || ''}</div>
              <div className={styles.labelTopRight} style={{ color: 'blue' }}>{keyObj.labels.tr || ''}</div>
              <div className={styles.labelBottomRight} style={{ color: 'blue' }}>{keyObj.labels.br || ''}</div>
            </>
          ) : (
            <>
              <div className={styles.labelTop}>{keyObj.labels.tl || ''}</div>
              <div className={styles.labelBottom}>{keyObj.labels.bl || ''}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
