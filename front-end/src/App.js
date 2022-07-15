import logo from './logo.svg';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

const ws = new WebSocket('ws://127.0.0.1:8080/websocket');
function App() {

  const [wsMessage, setWsMessage] = useState();
  useEffect(() => {
    ws.onopen = () => {
      console.log('wb connected');
    };
    ws.onmessage = msg => {
      console.log(msg);
      setWsMessage(msg.data);
    };
  }, []);

  const handleButtonOnClick = () => {
    ws.send('test');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {wsMessage}
        <button onClick={handleButtonOnClick}>send test</button>
      </header>
    </div>
  );
}

export default App;
