import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Video from './components/Video';
import Login from './components/Login';
import Admin from './components/Admin';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element ={<Login/>}/>
      <Route path='/admin' element ={<Admin/>}/>
      <Route path='/registro' element ={<Register/>}/>
        <Route path='/usuario/:id' element ={<Home/>}/>
        <Route path="/video" element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
