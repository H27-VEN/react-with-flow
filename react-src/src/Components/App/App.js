import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Login from '../Login/Login.js'
import Navbar from '../Navbar/Navbar.js';
import Product from '../Product/Product.js';
import Profile from '../Profile/Profile.js';
import Signup from '../Signup/Signup.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/products" component={Product}/>
            <Route exact path="/profile" component={Profile}/>
            <Redirect from="/" to="/products" />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
