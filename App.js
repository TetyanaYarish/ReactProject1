import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from './components/routes';



function App() {  

  return (
    <div className="App">
      <header className="App-header">
        <span>Tetyana Yarish Project</span>
        <Link to="/">Home</Link>
        <Link to="/about">Add_Note</Link>
              <Link to="/contact">Favorite color</Link>
          </header>
          <Routes />         
      </div>

  );
}

export default App;
