import React from 'react';
import styles from './Key.module.css';

function Key({ keyObj, isActive, isWorking, isPressed }) {
  return (
    <div
      className={`${styles.key} ${isActive ? styles.active : ''} ${isWorking ? styles.working : ''} ${isPressed ? styles.pressed : ''}`}
    >
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
