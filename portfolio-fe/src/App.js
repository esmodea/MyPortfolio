import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { selectPage } from './features/state/common/navBarSlice';
import AboutPage from './features/components/1-AboutPage/AboutPage';
import AbilitiesPage from './features/components/2-AbilitiesPage/AbilitiesPage';
import ResumePage from './features/components/3-ResumePage/ResumePage';
import GitPage from './features/components/4-GitPage/GitPage';
import ToolsPage from './features/components/5-ToolsPage/ToolsPage';

import PrivateRoute from './features/components/common/PrivateRoute';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {dispatch(selectPage(location.pathname));});

  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/about' />}/>
      <Route path='/about' element={<AboutPage />}/>
      <Route path={'/abilities'} element={<PrivateRoute><AbilitiesPage /></PrivateRoute>} />
      <Route path='/resume' element={<ResumePage />}/>
      <Route path='/github' element={<GitPage />}/>
      <Route path='/tools' element={<ToolsPage />}/>
    </Routes>
  );
}

export default App;