import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Header';
import Layout from './components/Layout';
import MainModule from './components/LearningModules/MainModule';




function App() {

  const location = useLocation()
  const isHome = location.pathname === '/';

  return (
    <div className="App">
        <Header isHome={isHome}/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/learn' element={<MainModule/>}/>
        </Routes>
    </div>
  );
}

export default App;
