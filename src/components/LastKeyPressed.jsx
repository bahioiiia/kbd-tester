import React from 'react';
import styles from './LastKeyPressed.module.css';

function LastKeyPressed({ lastKey }) {
  return (
    <div className={styles.lastKeyPressed}>
      <h2>Last Key Pressed: {lastKey}</h2>
    </div>
  );
}

export default LastKeyPressed;