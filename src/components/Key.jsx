import React from 'react';
import styles from './Key.module.css';

function Key({ keyObj, isActive, isWorking, isPressed }) {
  const keyClass = `${styles.key} ${isActive ? styles.active : ''} ${isWorking ? styles.working : ''} ${isPressed ? styles.pressed : ''} ${styles[keyObj.code.toLowerCase()] || ''}`;
  
  return (
    <div className={keyClass}>
      {keyObj.type === 'symbol' ? (
        <>
          <div className={styles.symbolBox}>{keyObj.labels.tl || ''}</div>
          <div className={styles.symbolBox}>{keyObj.labels.bl || ''}</div>
          <div className={styles.symbolBox} style={{ color: 'deepskyblue' }}>{keyObj.labels.tr || ''}</div>
          <div className={styles.symbolBox} style={{ color: 'deepskyblue' }}>{keyObj.labels.br || ''}</div>
        </>
      ) : (
        <>
          <div className={styles.specialBox}>{keyObj.labels.tl || ''}</div>
          <div className={styles.specialBox}>{keyObj.labels.bl || ''}</div>
        </>
      )}
    </div>
  );
}

export default Key;
