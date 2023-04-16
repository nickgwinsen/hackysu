import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Header';
import Layout from './components/Layout';
import MainModule from './components/LearningModules/MainModule';
import Footer from './components/Footer';




function App() {

  const location = useLocation()
  const isHome = location.pathname === '/';

  return (
    <div className="App">
        <Header isHome={isHome}/>
        <ToastContainer position="bottom-right"/>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/learn' element={<MainModule/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
