import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarBox({ date, handleDate }) {
  return (
    <div>
      <Calendar onChange={handleDate} value={date} />
    </div>
  );
}
