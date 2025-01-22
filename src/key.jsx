import React from 'react';
import styles from './Keyboard.module.css';

function Key({ keyObj, isActive, isWorking, isPressed }) {
  return (
    <div
      className={`${styles.key} ${isActive ? styles.active : ''} ${isWorking ? styles.working : ''} ${isPressed ? styles.pressed : ''}`}
    >
      {keyObj.type === 'symbol' ? (
        <>
          <div className={styles.labelTopLeft}>{keyObj.labels.tl || ''}</div>
          <div className={styles.labelBottomLeft}>{keyObj.labels.bl || ''}</div>
          <div className={styles.labelTopRight} style={{ color: 'lightblue' }}>{keyObj.labels.tr || ''}</div>
          <div className={styles.labelBottomRight} style={{ color: 'lightblue' }}>{keyObj.labels.br || ''}</div>
        </>
      ) : (
        <>
          <div className={styles.labelTop}>{keyObj.labels.tl || ''}</div>
          <div className={styles.labelBottom}>{keyObj.labels.bl || ''}</div>
        </>
      )}
    </div>
  );
}

export default Key;
