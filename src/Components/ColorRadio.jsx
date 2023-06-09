import React from 'react';
import styles from './ColorRadio.module.css';
export default function ColorRadio({handleColor}) {
  return (
    <div className={styles.box}>
      <div className={`${styles.pink} ${styles.color}`} onClick={()=>handleColor("pink")}></div>
      <div className={`${styles.yellow} ${styles.color}`} onClick={()=>handleColor("yellow")}></div>
      <div className={`${styles.green} ${styles.color}`} onClick={()=>handleColor("green")}></div>
    </div>
  );
}
