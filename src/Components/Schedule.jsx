import React from 'react';
import moment from 'moment';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Schedule({ date, handleDate, openModal }) {
  return (
    <div>
      <p>{moment(date).format('YYYY년 MM월 DD일')}</p>
      <AiOutlinePlus onClick={openModal} />
    </div>
  );
}
