import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import userService from './utils/userService';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Films from './pages/Films/Films';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

class App extends Component {

  state = {
    user: userService.getUser()
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    userService.Logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props =>
              <Home />
            }/>
            <Route exact path="/films" render={props =>
            userService.getUser()
            ? <Films />
            : <Redirect to="/login" />
          }/>
            <Route exact path="/login" render={props =>
            <Login />
          }/>
            <Route exact path="/signup" render={props =>
            <Signup 
            {...props} 
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
