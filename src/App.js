import { BrowserRouter as Router,Routes,Route,Switch } from 'react-router-dom';
import react from 'react';
import './App.css';
import Nav from './comp/Nav';
import Display from './comp/display';
import Convertor from './comp/Convertor';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Display />}></Route>
        <Route path="/convertor" element={<Convertor />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
