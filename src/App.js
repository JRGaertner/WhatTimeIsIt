import React, { useState, useEffect } from 'react'
import './App.css';
import 'react-clock/dist/Clock.css';

import moment from 'moment'

import { TimeSelect } from './component/TimeSelect'
import Clock from 'react-clock'

function App() {
  const [time, setTime] = useState(new Date());
  const timezones = [
    { name: 'Houston', timezone: 'America/Chicago' },
    { name: 'UK', timezone: 'Europe/London' }
  ]
  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TimeSelect locations={timezones} onTimeChange={setTime}/>
        <p>Current time: {time.toLocaleString()}</p>
        <Clock value={time} />
      </header>
    </div>
  );
}

export default App;
