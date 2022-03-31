import React from 'react';
import { useEffect } from 'react';

function App() {

  const [counter, setCounter] = React.useState(0);
  const [intervalId, setIntervalId] = React.useState('');

  const start = () => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);
    setIntervalId(intervalId);
  }

  const reset = () => {
    setCounter(0);
  }


  const pause = () => {
    clearInterval(intervalId);
  }

  const stop = () => {
    clearInterval(intervalId);
    setCounter(0);
  }

  return (
    <div>
      <h1>Hello StopWatch</h1>
      <h3>{counter}</h3>
      <button onClick={start}>Start</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default App;
