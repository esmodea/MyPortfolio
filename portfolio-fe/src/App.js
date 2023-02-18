import React from 'react';
import LandingPage from './features/components/LandingPage/LandingPage';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/about' />}/>
      <Route path='/about' element={<LandingPage />}/>
    </Routes>
  );
}

export default App;
