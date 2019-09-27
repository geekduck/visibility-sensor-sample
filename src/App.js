import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './App.css';

const CurrentTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  return <div className="CurrentTimer">{dayjs(currentTime).format('YYYY/MM/DD HH:mm:ss.SSS')}</div>
};

function App() {
  return (
    <div className="App">
      <hr className="up" />
      <CurrentTimer/>
      <hr className="down" />
    </div>
  );
}

export default App;
