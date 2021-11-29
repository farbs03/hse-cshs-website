import './App.css';
import {Routes, Route} from "react-router-dom"

import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <Navbar>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Navbar>
  );
}

export default App;
