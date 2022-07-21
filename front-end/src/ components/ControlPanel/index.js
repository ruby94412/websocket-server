import {useState, useEffect} from 'react';

const ws = new WebSocket('ws://localhost:8080/websockets');
export default () => {
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
    <div>
      {wsMessage}
    </div>
  )
}