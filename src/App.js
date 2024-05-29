import logo from './logo.svg';
import './App.css';
import ChatComponent from './ChatComponent';
import { Button } from '@mui/material';



function App() {
  return (
    <div className="App">
      <ChatComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant='contained'>Ola</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
