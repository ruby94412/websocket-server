import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const handleButtonOnClick = async() => {
    await axios.get('http://localhost:8080/test').then(response => {
      console.log(response);
    });
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
        <button onClick={handleButtonOnClick}>send test</button>
      </header>
    </div>
  );
}

export default App;
