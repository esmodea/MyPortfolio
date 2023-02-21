import React from 'react';
import AboutPage from './features/components/1-AboutPage/AboutPage';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/about' />}/>
      <Route path='/about' element={<AboutPage />}/>
    </Routes>
  );
}

export default App;