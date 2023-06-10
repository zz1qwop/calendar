import React from 'react';
import moment from 'moment';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './Schedule.module.css';
import TodoItem from './TodoItem';

export default function Schedule({ date, handleDate, openModal, schedule }) {
  // 해당 날짜의 일정 리스트 만들기
  const month = date.getMonth() + '월';
  const scheduleList = Object.keys(schedule).includes(`${date.getMonth()}월`)
    ? schedule[month].filter(
        (todo) => todo.date === moment(date).format('YYYY년 MM월 DD일')
      )
    : [];

  console.log(scheduleList);

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
      <div className={styles.scheduleBox}>
        {/* 해당 date에 맞는 데이터를 골라 map으로 돌며 item 생성. */}
        {scheduleList.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
