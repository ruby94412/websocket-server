import {useEffect, useState} from 'react';
import './App.css';

const ws = new WebSocket('ws://47.100.26.104:8080/websockets');
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

  return (
    <div className="App">
        {wsMessage}
    </div>
  );
}

export default App;
