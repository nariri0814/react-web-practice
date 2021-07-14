import React from 'react';

import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './page/home/template/Main';
import Home from './page/home/Home';

function App() {
  return (
    <div className="wrap">
      <Home/>
      {/* <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer> */}
    </div>
  );
}

export default App;
