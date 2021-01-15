import React, { useState, useEffect } from 'react';
// import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

function App() {
  let pages = [
    { readableName: 'Home', url: 'home' },
    { readableName: 'Register', url: 'register' },
    { readableName: 'Login', url: 'login' },
  ]

  const [currentPage, setCurrentPage] = useState(0);

  // component did update
  const setPage = (newPageNum) => {
    console.log(newPageNum)
    setCurrentPage(newPageNum)
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
  }

    //component did mount
    useEffect(() => {
      console.log('did mount')
      let lsPage = window.localStorage.getItem('currentPage')
      if(lsPage) {
        if (lsPage !== currentPage) {
          setCurrentPage(JSON.parse(lsPage))
        }
      }
      
      console.log(currentPage)
    }, [])




  return (
    <div className="App">
      <Router>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setPage={setPage}
        />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/register">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>


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
