import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Header';
import Landing from './components/Landing';
import MainModule from './components/LearningModules/MainModule';


export const Main = styled.main`

  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 100px 50px;

`

function App() {

  const location = useLocation()
  const isHome = location.pathname === '/';

  return (
    <div className="App">
      <Main>
        <Header isHome={isHome}/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/learn' element={<MainModule/>}/>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
