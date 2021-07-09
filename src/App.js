import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="wrap">
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
