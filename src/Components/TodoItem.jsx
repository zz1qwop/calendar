import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo }) {
  const selectedColor =
    todo.color === 'pink'
      ? '#ff8f8f'
      : todo.color === 'yellow'
      ? '#ffeda5'
      : '#bfe19b';
  return (
    <div className={styles.todoBox}>
      <div className={styles.titleBox}>
        <div
          className={styles.color}
          style={{ backgroundColor: selectedColor }}
        ></div>
        <p className={styles.title}>{todo.title}</p>
      </div>
      <div className={styles.btnBox}>
        <BsFillPencilFill className={styles.edit} />
        <BsFillTrashFill className={styles.delete} />
      </div>
    </div>
  );
}
