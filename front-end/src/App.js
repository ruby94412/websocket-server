// import {useEffect, useState} from 'react';
import './App.css';
import Login from './ components/Login';

// const ws = new WebSocket('wss://192.168.0.37:8080/websockets');
function App() {

  // const [wsMessage, setWsMessage] = useState();
  // useEffect(() => {
  //   ws.onopen = () => {
  //     console.log('wb connected');
  //   };
  //   ws.onmessage = msg => {
  //     console.log(msg);
  //     setWsMessage(msg.data);
  //   };
  // }, []);

  return (
    <div className="App">
        {/* {wsMessage} */}
        <Login />
    </div>
  );
}

export default App;
