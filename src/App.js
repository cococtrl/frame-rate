import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Films from './pages/Films/Films';

function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
      <div className="App-inner-container">
        <Switch>
          <Route exact path="/" render={props =>
            <Home />
          }/>
          <Route exact path="/films" render={props =>
          <Films />
        }/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
