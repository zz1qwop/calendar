import React from 'react';
import moment from 'moment';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './Schedule.module.css';

export default function Schedule({ date, handleDate, openModal }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Schedule</p>
        <div className={styles.dateBox}>
          <p className={styles.date}>
            {moment(date).format('YYYY년 MM월 DD일')}
          </p>
          <AiOutlinePlus className={styles.addBtn} onClick={openModal} />
        </div>
      </div>
      <div className={styles.scheduleBox}></div>
    </div>
  );
}
