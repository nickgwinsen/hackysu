import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Header';
import Layout, { Main } from './components/Layout';
import MainModule from './components/LearningModules/MainModule';
import Footer from './components/Footer';


//Contexts
import { ThemeContext } from "./Contexts/ThemeContext"




function App() {

  const location = useLocation()
  const isHome = location.pathname === '/';



  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    toggleTheme,
  };




  return (
    <div className="App" id="app">



      <ThemeContext.Provider value={contextValue}>
        <Header isHome={isHome} />
        <ToastContainer position="bottom-right" />
        <Main id="main">
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/learn' element={<MainModule />} />
          </Routes>
        </Main>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
