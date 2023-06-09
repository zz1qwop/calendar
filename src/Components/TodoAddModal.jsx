import React, { useState } from 'react';
import styles from './TodoAddModal.module.css';
import ColorRadio from './ColorRadio';

export default function TodoAddModal({
  date,
  open,
  closeModal,
  schedule,
  addSchedule,
}) {
  const [color, setColor] = useState('pink');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    const month = date.getMonth();

    if (Object.keys(schedule).includes(`${date.getMonth()}`)) {
      const monthSchedule = schedule[month].concat({
        date: `${date}`,
        color: `${color}`,
        title: `${title}`,
      });
      console.log(monthSchedule);
      addSchedule((prev) => ({
        ...prev,
        [month]: monthSchedule,
      }));
    } else {
      addSchedule((prev) => ({
        ...prev,
        [month]: [{ date: `${date}`, color: `${color}`, title: `${title}` }],
      }));
    }
    closeModal();
    console.log(schedule);
  };

  return (
    <div
      className={open ? `${styles.modal} ${styles.openModal}` : styles.modal}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <ColorRadio handleColor={setColor} />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}
