import logo from './logo.svg';
import './App.css';
import Documentation from './Documentation';

function App() {
const welcomeMessage = "Welcome baby!";
const goodbye = "Bye!";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{welcomeMessage}</h1>
        <Documentation />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Playing around with this!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{goodbye}</p>
      </header>
    </div>
  );
}

export default App;
