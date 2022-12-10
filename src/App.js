import React from 'react';
import RepoList from './components/APIHandling.js';
import './styling/App.css';

function App() {
  return (
    <>
    <div className='App'>
      <header className='Header'>
        <div className="Head">
          <h2>List of Repos</h2>
        </div> 
      </header>
      <body>
        <div className='Github-Repos'>
          <RepoList/>
        </div>
      </body>
      <footer>
        <p>Diego Arroyo Castaneda 2022</p>
      </footer>
    </div>
    </>
  );
}

export default App;
