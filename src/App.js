import React from 'react';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Coaching from './pages/Coaching';
import Projects from './pages/Projects';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/coaching' element={<Coaching />} />
      </Routes>
    </div>
  );
}

export default App;
