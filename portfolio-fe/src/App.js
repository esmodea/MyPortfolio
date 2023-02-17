import React from 'react';
import LandingPage from './features/components/LandingPage/LandingPage';
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />}/>
      <Route path='/portfolio' element={<LandingPage />}/>
    </Routes>
  );
}

export default App;
