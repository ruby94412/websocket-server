import {useState} from 'react';
import Login from './ components/Login';
import ControlPanel from './ components/ControlPanel';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
        {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
        {
          isLoggedIn
            && (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<ControlPanel />} />
                </Routes>
              </BrowserRouter>
          )
        }
    </div>
  );
}

export default App;
