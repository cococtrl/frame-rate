import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
      <div className="App-inner-container">
        <Switch>
          <Route path="/" render={props =>
            <Home />
          }/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
