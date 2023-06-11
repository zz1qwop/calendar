import React, { useState } from 'react';
import CalendarBox from '../Components/CalendarBox';
import Schedule from '../Components/Schedule';
import TodoAddModal from '../Components/TodoAddModal';
import styles from './MyCalendarPage.module.css';

export default function MyCalendarPage() {
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);
  const [schedule, setSchedule] = useState({});

  // 일정 클릭 시 일정의 상세 페이지로 이동하는 기능
  const [isList, setIsList] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleTodo = (todo) => {
    setSelectedTodo(todo);
    setIsList(false);
  };
  const closeDetail = () => {
    setIsList(true);
  };

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
      <CalendarBox
        date={date}
        handleDate={setDate}
        schedule={schedule}
        closeDetail={closeDetail}
      />
      <Schedule
        date={date}
        openModal={openModal}
        schedule={schedule}
        deleteTodoItem={deleteTodoItem}
        isList={isList}
        selectedTodo={selectedTodo}
        handleTodo={handleTodo}
        closeDetail={closeDetail}
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
