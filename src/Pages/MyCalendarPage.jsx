import React, { useState } from 'react';
import CalendarBox from '../Components/CalendarBox';
import Schedule from '../Components/Schedule';
import TodoAddModal from '../Components/TodoAddModal';
import styles from './MyCalendarPage.module.css';

export default function MyCalendarPage() {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState({});

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const deleteTodoItem = (month, id) => {
    const newList = schedule[month].filter((todo) => todo.id !== id);
    setSchedule((prev) => ({
      ...prev,
      [month]: newList,
    }));
  };

  return (
    <div className={styles.box}>
      <CalendarBox date={date} handleDate={setDate} schedule={schedule} />
      <Schedule
        date={date}
        handleDate={setDate}
        openModal={openModal}
        schedule={schedule}
        deleteTodoItem={deleteTodoItem}
      />
      <TodoAddModal
        open={modal}
        date={date}
        closeModal={closeModal}
        schedule={schedule}
        addSchedule={setSchedule}
      />
    </div>
  );
}
