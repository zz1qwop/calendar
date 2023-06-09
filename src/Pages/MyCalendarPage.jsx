import React, { useState } from 'react';
import CalendarBox from '../Components/CalendarBox';
import Schedule from '../Components/Schedule';
import TodoAddModal from '../Components/TodoAddModal';

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

  return (
    <>
      <CalendarBox date={date} handleDate={setDate} />
      <Schedule date={date} handleDate={setDate} openModal={openModal} />
      <TodoAddModal
        open={modal}
        date={date}
        closeModal={closeModal}
        schedule={schedule}
        addSchedule={setSchedule}
      />
    </>
  );
}
