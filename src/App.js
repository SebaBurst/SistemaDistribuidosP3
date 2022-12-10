import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path="/video" element={<Video/>} />
      </Routes>
    </div>
  );
}

export default App;
