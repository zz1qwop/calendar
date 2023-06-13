import './App.css';
import { ColorThemeProvider } from './Context/ColorThemeContext';
import MyCalendarPage from './Pages/MyCalendarPage';

function App() {
  return (
    <>
      <ColorThemeProvider>
        <MyCalendarPage />
      </ColorThemeProvider>
    </>
  );
}

export default App;
