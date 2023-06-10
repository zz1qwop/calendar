import React from 'react';
import styles from './ColorRadio.module.css';
export default function ColorRadio({ color, handleColor }) {
  return (
    <div className={styles.box}>
      <div
        className={`${styles.pink} ${styles.color} ${
          color === 'pink' ? styles.selected : ''
        }`}
        onClick={() => handleColor('pink')}
      ></div>
      <div
        className={`${styles.yellow} ${styles.color} ${
          color === 'yellow' ? styles.selected : ''
        }`}
        onClick={() => handleColor('yellow')}
      ></div>
      <div
        className={`${styles.green} ${styles.color} ${
          color === 'green' ? styles.selected : ''
        }`}
        onClick={() => handleColor('green')}
      ></div>
    </div>
  );
}
