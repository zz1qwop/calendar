import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarBox.css';

export default function CalendarBox({ date, handleDate }) {
  return (
    <div className="container">
      <Calendar
        onChange={handleDate}
        value={date}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
}
