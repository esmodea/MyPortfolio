import React from 'react';

import AboutPage from './features/components/1-AboutPage/AboutPage';
import AbilitiesPage from './features/components/2-AbilitiesPage/AbilitiesPage';
import Login from './features/components/2-AbilitiesPage/Login';

import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/about' />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/abilities' element={<AbilitiesPage />}/>
    </Routes>
  );
}

export default App;