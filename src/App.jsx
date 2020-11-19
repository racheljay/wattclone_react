import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import User from './User';
import Nav from './Nav';
import Signup from './Signup';

function App() {


  
  return (
    <div className="App">
      <Nav />
      <Signup />
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* this link bit is specific to react router */}
          <Link to={`/user`}>Link Content</Link>
          {/* this makes it so that we can go to a new page without refreshing
          it maintains the state */}

          <Switch>
            <Route path="/">
              <SimpleComponent />
            </Route>

            <Route path="/user">
              <User/>
            </Route>
          </Switch>


        </header>
      </Router>
    </div>
  );
}

const SimpleComponent = () => {
  return (
    <h1>Home Page</h1>
  )
}

export default App;
