import './App.css';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import Landing from './components/Landing';


export const Main = styled.main`

  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 50px;
`

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
    </div>
  );
}

export default App;
